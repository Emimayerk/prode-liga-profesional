export interface Match {
  local: string;
  visita: string;
}

export const useConfig = () => {
  const matches: Array<Match> = [
    {
      local: 'Equipo A',
      visita: 'Equipo B',
    },
    {
      local: 'Equipo D',
      visita: 'Equipo C',
    },
    {
      local: 'Equipo E',
      visita: 'Equipo F',
    },
  ];

  return { matches };
};
