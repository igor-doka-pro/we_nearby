import { IATitle } from './type';
import './ATitle.scss';

export const ATitle = ({ variant, children }: IATitle) => <h3 className={variant}>{children}</h3>;
