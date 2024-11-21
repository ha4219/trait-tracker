import { useState } from 'react';
import { ChampionsContext } from '@/context/champions-context';

export const ChampionProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [champions, setChampions] = useState(0n);
  const [others, _setOthers] = useState(0n);

  return (
    <ChampionsContext.Provider
      value={{
        champions,
        setChampions,
        others,
        _setOthers,
      }}
    >
      {children}
    </ChampionsContext.Provider>
  );
};
