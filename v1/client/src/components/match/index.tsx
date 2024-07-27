import { PredictionEnum } from '../../enum/prediction';
import { useProde } from '../../hooks/useProde';
import { MatchProps } from '../../models/components';

import './styles/index.scss';

export const Match = ({ match, className }: MatchProps) => {
  const { local, visita, predict } = match;

  const { setPrediction } = useProde();

  const rootClass = 'match';

  return (
    <article className={`${rootClass} ${className || ''}`}>
      <div
        className={`${rootClass}__selector ${predict === PredictionEnum.LOCAL ? `${rootClass}__selector--active` : ''}`}
        onClick={() => setPrediction(PredictionEnum.LOCAL, match)}
      >
        <span className={`${rootClass}__selector__title`}>{local}</span>
        <span className={`${rootClass}__selector__flag`}></span>
      </div>
      <div
        className={`${rootClass}__selector ${predict === PredictionEnum.EMPATE ? `${rootClass}__selector--active` : ''}`}
        onClick={() => setPrediction(PredictionEnum.EMPATE, match)}
      >
        <span className={`${rootClass}__selector__title`}>Empate</span>
        <span className={`${rootClass}__selector__flag`}></span>
      </div>
      <div
        className={`${rootClass}__selector ${predict === PredictionEnum.VISITA ? `${rootClass}__selector--active` : ''}`}
        onClick={() => setPrediction(PredictionEnum.VISITA, match)}
      >
        <span className={`${rootClass}__selector__title`}>{visita}</span>
        <span className={`${rootClass}__selector__flag`}></span>
      </div>
    </article>
  );
};
