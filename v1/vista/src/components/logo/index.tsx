import logo from '../../assets/img/logo.png';
import { BaseComponent } from '../../models/components/base';

import './styles/index.scss';

interface LogoProps extends BaseComponent {}

export const Logo = ({ className }: LogoProps) => {
  const rootClass = 'prode-logo';

  return (
    <figure className={`${rootClass} ${className && className}`}>
      <img src={logo} alt="Prode Caracol logo" />
    </figure>
  );
};
