import { BaseComponent } from '../../models/components/base';

import './styles/index.scss';

interface FooterProps extends BaseComponent {}

export const Footer = ({ className }: FooterProps) => {
  const rootClass = 'prode__footer';

  return (
    <footer className={`${rootClass} ${className || ''}`}>
      <span>© copyright abrazo caracol</span>
    </footer>
  );
};
