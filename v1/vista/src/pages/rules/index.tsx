import { PageWrapper } from '../../components/pageWrapper';
import { BaseComponent } from '../../models/components/base';

interface RulesProps extends BaseComponent {
  name: string;
}

export const Rules = ({ name, className }: RulesProps) => {
  return (
    <PageWrapper name={name} className={className}>
      Reglamento
    </PageWrapper>
  );
};
