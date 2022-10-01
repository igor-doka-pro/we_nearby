import { Logo } from '../Logo/Logo';
import { Menu } from '../Menu/Menu';
import './Header.scss';

export const Header = () => (
  <div className="header-wrap">
    <Logo />
    <Menu />
    <div>Что-то справа</div>
  </div>
);
