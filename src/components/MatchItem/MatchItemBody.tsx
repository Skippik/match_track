import {MatchType, TeamType} from '../../types';
import avatar from '../../assets/icons/avatar.svg';
import {Config} from '../../config';

interface MatchItemProps {
  item: MatchType;
}

const MatchItemBody: React.FC<MatchItemProps> = ({item}) => {
  return (
    <div className='m-collapse__body'>
      {/* Away team */}
      <div className='team-wrapper'>
        <div className='players-wrapper'>
          {Object.values(item.awayTeam.players).map((item, key) => (
            <div key={key} className='team'>
              <div className='team__player'>
                <img src={avatar} alt={`Player ${key + 1}`} />
                <span>{item.username}</span>
              </div>
              <div className='team__info'>
                <span className='title'>{'Убийств:'}</span>
                <span className='info'>{item.kills}</span>
              </div>
            </div>
          ))}
        </div>
        <div className='team-general-wrapper'>
          {Object.keys(item.awayTeam).map((teamItem, index) => {
            const teamData = item.awayTeam[teamItem as keyof TeamType];
            if (typeof teamData === 'number') {
              return (
                <div key={index} className='team-general__info'>
                  <span className='title'>
                    {
                      Config.teamGeneral[
                        teamItem as keyof typeof Config.teamGeneral
                      ]
                    }
                  </span>
                  <span className='info'>{teamData}</span>
                </div>
              );
            }
          })}
        </div>
      </div>
      {/* Home team */}
      <div className='team-wrapper'>
        <div className='players-wrapper'>
          {Object.values(item.homeTeam.players).map((item, key) => (
            <div key={key} className='team'>
              <div className='team__player'>
                <img src={avatar} alt={`Player ${key + 1}`} />
                <span>{item.username}</span>
              </div>
              <div className='team__info'>
                <span className='title'>{'Убийств:'}</span>
                <span className='info'>{item.kills}</span>
              </div>
            </div>
          ))}
        </div>
        <div className='team-general-wrapper'>
          {Object.keys(item.homeTeam).map((teamItem, index) => {
            const teamData = item.homeTeam[teamItem as keyof TeamType];
            if (typeof teamData === 'number') {
              return (
                <div key={index} className='team-general__info'>
                  <span className='title'>
                    {
                      Config.teamGeneral[
                        teamItem as keyof typeof Config.teamGeneral
                      ]
                    }
                  </span>
                  <span className='info'>{teamData}</span>
                </div>
              );
            }
          })}
        </div>
      </div>
    </div>
  );
};

export default MatchItemBody;
