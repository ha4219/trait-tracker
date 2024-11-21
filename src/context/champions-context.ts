import { createContext } from 'react';

type ChampionContextType = {
  champions: bigint;
  setChampions: React.Dispatch<React.SetStateAction<bigint>>;
  others: bigint;
  _setOthers: React.Dispatch<React.SetStateAction<bigint>>;
};

export const ChampionsContext = createContext<ChampionContextType | null>(null);
