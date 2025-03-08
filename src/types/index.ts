import {MatchStatus} from './enum';

export type ApiResponse<T> = {
  ok: boolean;
  data: T;
};

export type PlayerType = {
  username: string;
  kills: number;
};

export type TeamType = {
  name: string;
  players: PlayerType[];
  points: number;
  place: number;
  total_kills: number;
};

export type MatchType = {
  time: string;
  title: string;
  homeTeam: TeamType;
  awayTeam: TeamType;
  homeScore: number;
  awayScore: number;
  status: MatchStatus;
};
