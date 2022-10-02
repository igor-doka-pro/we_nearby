import { LanguageSwitcher } from 'components/LanguageSwitcher/LanguageSwitcher';
import { Logo } from '../Logo/Logo';
import { Menu } from '../Menu/Menu';
import { ReactComponent as IconArrow } from '../../assets/icons/arrow.svg';
import './Header.scss';

export const Header = () => (
  <div className="header-wrap">
    <Logo />
    <Menu />
    <div className="container">
      <LanguageSwitcher />
      <button className="header-button">
        <div className="header-button__text">Начать проект</div>
        <div>
          <IconArrow />
        </div>
      </button>
    </div>
  </div>
);
