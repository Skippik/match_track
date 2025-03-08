import {Button} from 'antd';
import {SyncOutlined} from '@ant-design/icons';
import {ErrorIcon, LogoIcon} from '../../assets/UI/icons';

interface HeaderProps {
  loading: boolean;
  callBack: () => void;
  error: boolean;
}

const Header: React.FC<HeaderProps> = ({loading, callBack, error}) => {
  return (
    <div className='m-header'>
      <div className='m-header__icon'>
        <LogoIcon />
      </div>
      <div className='m-header__action'>
        {error && (
          <div className='m-header__action--error'>
            <ErrorIcon />
            <span>{'Ошибка: не удалось загрузить информацию'}</span>
          </div>
        )}

        <Button
          className='m-header__action--btn'
          onClick={callBack}
          icon={loading ? <SyncOutlined spin /> : undefined}
          loading={loading}>
          {'Обновить'}
        </Button>
      </div>
    </div>
  );
};

export default Header;
