export interface ProdeContextProps {
  prode: Array<Prode>;
  setPrediction: (prediction: PredictionEnum, match: Prode) => void;
}

export interface Prode {
  id: number;
  local: string;
  predict: PredictionEnum;
  visita: string;
}
