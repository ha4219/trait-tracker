import { useContext } from 'react';
import { ChampionsContext } from '@/context/champions-context';

export const useChampions = () => {
  const context = useContext(ChampionsContext);
  if (!context) {
    throw new Error('useChampion must be used within a ChampionProvider');
  }
  return context;
};
