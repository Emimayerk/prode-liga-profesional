import { createContext, FC, ReactNode, useState } from 'react';

import { PredictionEnum } from '../enum/prediction';
import { Prode, ProdeContextProps } from '../models/context/prode';

export const ProdeContext = createContext<ProdeContextProps | null>(null);

export const ProdeProvider: FC<{ children: ReactNode; defaultProde: Array<Prode> }> = ({ defaultProde, children }) => {
  const [prode, setProde] = useState<Array<Prode>>(defaultProde);

  const setPrediction = (prediction: PredictionEnum, match: Prode) => {
    const removedCurrentMatch = prode.filter((currentMatch) => match.id !== currentMatch.id);
    const sortedProde = [...removedCurrentMatch, { ...match, predict: prediction }].sort((a, b) => a.id - b.id);
    setProde(sortedProde);
  };

  return <ProdeContext.Provider value={{ prode, setPrediction }}>{children}</ProdeContext.Provider>;
};
