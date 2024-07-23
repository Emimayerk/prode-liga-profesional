import { Fixture } from '../../components/fixture';
import { PageWrapper } from '../../components/pageWrapper';
import { useProde } from '../../hooks/useProde';
import { HomeProps } from '../../models/pages/home';

import './styles/index.scss';

export const Home = ({ name, className }: HomeProps) => {
  const { prode } = useProde();

  return (
    <PageWrapper name={name} className={className}>
      <Fixture matches={prode} />
      <button onClick={() => alert(JSON.stringify(prode))}> JUGAR </button>
    </PageWrapper>
  );
};
