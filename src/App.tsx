import {useEffect, useState} from 'react';
import './assets/less/index.less';
import Header from './components/Header';
import {ApiResponse, MatchType} from './types';
import {api} from './api';
import {Spin} from 'antd';
import {EmptyIcon} from './assets/UI/icons';
import Matches from './components/Matches';

type MatchResponseType = {
  matches: MatchType[];
};

const App = () => {
  //
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [data, setData] = useState<MatchType[]>([]);
  //
  const getMatchs = async () => {
    setLoading(true);
    const resp = await api<ApiResponse<MatchResponseType>>('fronttemp');
    setLoading(false);

    if (!resp.ok) {
      console.error(resp);
      setError(true);
      return;
    }

    if (resp.ok) {
      setError(false);
      setData(resp.data.matches);
    }
  };
  //
  useEffect(() => {
    getMatchs();
  }, []);
  //
  return (
    <>
      {loading && <Spin fullscreen size='large' />}
      <div className='m-wrapper'>
        <Header error={error} callBack={getMatchs} loading={loading} />
        <div className='m-matches'>
          {!data.length && (
            <div className='m-matches__empty'>
              <EmptyIcon />
              <span>{'Нет данных'}</span>
            </div>
          )}
          {!!data.length && <Matches data={data} />}
        </div>
      </div>
    </>
  );
};

export default App;
