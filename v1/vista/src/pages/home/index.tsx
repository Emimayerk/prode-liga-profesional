import { PageWrapper } from '../../components/pageWrapper';
import { BaseComponent } from '../../models/components/base';

import { Match, useConfig } from './useConfig';

import './styles/index.scss';

interface HomeProps extends BaseComponent {
  name: string;
}

export const Home = ({ name, className }: HomeProps) => {
  const { matches } = useConfig();

  return (
    <PageWrapper name={name} className={className}>
      <section className="matches__container">
        {matches.map((match: Match) => (
          <article className="match">
            <div className="match__team match__team-local match__selector">
              <span className="match__team__name">{match.local}</span>
              <span className="match__team__flag">{''}</span>
            </div>
            <div className="match__divider match__selector">
              <span className="match__team__name">Empate</span>
              <span className="match__team__flag">{''}</span>
            </div>
            <div className="match__team match__team-visita match__selector">
              <span className="match__team__name">{match.visita}</span>
              <span className="match__team__flag">{''}</span>
            </div>
          </article>
        ))}
      </section>
    </PageWrapper>
  );
};

export default Home;
