interface ErrorDetail {
  msg: string;
  type: string;
}

interface ResponseErrorType {
  ok: false;
  errors: ErrorDetail[];
}

/**
 *
 * Fetch data from API
 * -------------------
 *
 * @param endpoint api endpoint without '/'
 * @param method api method
 * @param payload data
 *
 * @returns Promise with data or error response
 *
 */
export const api = async <ResponseType = object>(
  endpoint: string,
  method: string = 'GET',
  body?: object,
  signal?: AbortSignal,
): Promise<ResponseType | ResponseErrorType> => {
  // ======== headers =========
  const headers: HeadersInit = {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  };

  const token = localStorage.getItem('token');
  if (token) {
    headers.Authorization = 'Bearer ' + token;
  }
  // ==========================

  // ======== body ============
  const bodyString =
    body && method.toUpperCase() !== 'GET' && method.toUpperCase() !== 'DELETE'
      ? JSON.stringify(body)
      : undefined;
  // ==========================

  try {
    const response = await fetch(
      import.meta.env.VITE_APP_API_ROUTE + endpoint,
      {
        headers,
        method,
        body: bodyString,
        signal,
      },
    );

    if (!response.ok) {
      const errorResponse = await response.json().catch(() => ({}));
      return {
        ok: false,
        errors: [
          {
            msg: errorResponse.detail || 'Unknown error',
            type: response.status.toString(),
          },
        ],
      };
    }

    if (response.status === 204) {
      return {} as ResponseType;
    }

    return (await response.json()) as ResponseType;
  } catch (error) {
    return {
      ok: false,
      errors: [
        {
          msg: (error as Error).message,
          type: (error as Error).name,
        },
      ],
    };
  }
};
