import { BaseComponent } from '../../models/components/base';

import { Logo } from '../logo';

import './styles/index.scss';

interface HeaderProps extends BaseComponent {
  title: string;
}

export const Header = ({ className, title }: HeaderProps) => {
  const rootClass = 'prode__header';

  return (
    <header className={`${rootClass} ${className || ''}`}>
      <Logo className={`${rootClass}__logo`} />

      <h1 className={`${rootClass}__title`}>{title}</h1>
    </header>
  );
};
