import { PredictionEnum } from '../enum/prediction';
import { PredictionBuilderParams } from '../models/utils/predictionBuilder';

export const predictionBuilder = ({ matches }: PredictionBuilderParams) => {
  return {
    prode: matches.map((match: { local: string; visita: string }, index) => ({
      id: index,
      local: match.local,
      predict: PredictionEnum.EMPATE,
      visita: match.visita,
    })),
  };
};
