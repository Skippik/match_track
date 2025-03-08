import {MatchStatus} from '../types/enum';

export const Config = {
  statusMatch: {
    [MatchStatus.Scheduled]: {
      color: '#EB6402',
      title: 'Match preparing',
    },
    [MatchStatus.Ongoing]: {
      color: '#43AD28',
      title: 'Live',
    },
    [MatchStatus.Finished]: {
      color: '#EB0237',
      title: 'Finished',
    },
  } as {
    [key in MatchStatus]: {
      color: string;
      title: string;
    };
  },

  teamGeneral: {
    place: 'Место',
    points: 'Points',
    total_kills: 'Всего убийств',
  } as Record<'place' | 'points' | 'total_kills', string>,
};
