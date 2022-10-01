import { NavLink } from 'react-router-dom';
import { IAMenuItemProps } from './type';
import './AMenuItem.scss';

export const AMenuItem = ({ children, path }: IAMenuItemProps) => (
  <NavLink
    to={path}
    className={({ isActive }) => (isActive ? 'menu__item menu__item_active' : 'menu__item')}
  >
    {children}
  </NavLink>
);
