import { useContext } from 'react';

import { ProdeContext } from '../context/prode';

export const useProde = () => useContext(ProdeContext)!;
