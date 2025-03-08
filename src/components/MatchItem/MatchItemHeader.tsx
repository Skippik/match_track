import {MatchItemIcon} from '../../assets/UI/icons';
import {MatchType} from '../../types';
import {Config} from '../../config';

interface MatchItemHeaderProps {
  item: MatchType;
}

const MatchItemHeader: React.FC<MatchItemHeaderProps> = ({item}) => {
  return (
    <div className='m-collapse__header'>
      <div className='away-wrapper'>
        <MatchItemIcon />
        <span>{item.awayTeam.name}</span>
      </div>
      <div className='score-wrapper'>
        <span>{`${item.awayScore}:${item.homeScore}`}</span>
        <div
          className='score-wrapper__status'
          style={{background: Config.statusMatch[item.status].color}}>
          {Config.statusMatch[item.status].title}
        </div>
      </div>
      <div className='home-wrapper'>
        <span>{item.homeTeam.name}</span>
        <MatchItemIcon />
      </div>
    </div>
  );
};

export default MatchItemHeader;
