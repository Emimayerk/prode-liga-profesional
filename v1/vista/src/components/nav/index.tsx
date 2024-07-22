import { NavLink } from 'react-router-dom';

import { BaseComponent } from '../../models/components/base';

import './styles/index.scss';

interface NavProps extends BaseComponent {}

export const Nav = ({ className }: NavProps) => {
  const rootClass = 'prode__nav';

  return (
    <nav className={`${rootClass} ${className || ''}`}>
      <ul>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => `${rootClass}__item ${isActive ? `${rootClass}__item--active` : ''}`}
          >
            Partidos
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/rules"
            className={({ isActive }) => `${rootClass}__item ${isActive ? `${rootClass}__item--active` : ''}`}
          >
            Reglamento
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
