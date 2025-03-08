import {Collapse} from 'antd';
import {MatchType} from '../../types';
import MatchItemHeader from '../MatchItem/MatchItemHeader';
import MatchItemBody from '../MatchItem/MatchItemBody';

interface MatchesProps {
  data: MatchType[];
}

const Matches: React.FC<MatchesProps> = ({data}) => {
  return (
    <div className='m-matches__wrapper'>
      <Collapse ghost rootClassName='m-matches__collapse--root'>
        {data.map((item, key) => (
          <Collapse.Panel
            showArrow={false}
            className='m-matches__collapse--panel'
            header={<MatchItemHeader item={item} />}
            key={key}>
            <MatchItemBody item={item} />
          </Collapse.Panel>
        ))}
      </Collapse>
    </div>
  );
};

export default Matches;
