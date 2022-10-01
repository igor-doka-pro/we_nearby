import { AMenuItem } from '../AMenuItem/AMenuItem';
import { dataMenuItems } from './data';
import './Menu.scss';

export const Menu = () => (
  <div className="menu">
    {dataMenuItems.map(({ id, item, path }) => (
      <AMenuItem key={id} path={path}>
        {item}
      </AMenuItem>
    ))}
  </div>
);
