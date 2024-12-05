import { Fixture } from '../../components/fixture';
import { PageWrapper } from '../../components/pageWrapper';
import { PredictionEnum } from '../../enum/prediction';
import { useProde } from '../../hooks/useProde';
import { HomeProps } from '../../models/pages/home';

import './styles/index.scss';

export const Home = ({ name, className }: HomeProps) => {
  const { prode } = useProde();

  // TODO: Create buildResults util
  const results = prode.map((match) => ({
    match: `${match.local}-${match.visita}`,
    prediction:
      match.predict === PredictionEnum.LOCAL
        ? match.local
        : match.predict === PredictionEnum.VISITA
          ? match.visita
          : match.predict,
  }));

  return (
    <PageWrapper name={name} className={className}>
      <Fixture matches={prode} />
      <button onClick={() => alert(JSON.stringify(results))}> JUGAR </button>
    </PageWrapper>
  );
};
