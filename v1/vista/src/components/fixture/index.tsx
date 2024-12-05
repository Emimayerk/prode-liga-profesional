import { FixtureProps } from '../../models/components/fixture';

import { Match } from '../match';

import './styles/index.scss';

export const Fixture = ({ matches, className }: FixtureProps) => {
  const rootClass = 'fixture';

  return (
    <section className={`${rootClass} ${className || ''}`}>
      {matches.map((match) => (
        <Match match={match} />
      ))}
    </section>
  );
};
