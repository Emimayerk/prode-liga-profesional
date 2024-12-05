export const useConfig = () => {
  const matches: Array<Record<string, string>> = [
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
