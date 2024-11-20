import { useState } from 'react';
import { ChampionsContext } from '@/context/champions-context';

export const ChampionProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [champions, setChampions] = useState(0n);

  return (
    <ChampionsContext.Provider value={{ champions, setChampions }}>
      {children}
    </ChampionsContext.Provider>
  );
};
