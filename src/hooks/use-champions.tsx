import { useContext } from 'react';
import { ChampionsContext } from '@/context/champions-context';
import { TRAITS_LENGTH, TEAM_UP_LENGTH, champions as C } from '@/data';
import { getAll, getCount } from '@/lib/bit';

export const useChampions = () => {
  const context = useContext(ChampionsContext);
  if (!context) {
    throw new Error('useChampion must be used within a ChampionProvider');
  }
  const { others, _setOthers, champions, setChampions } = context;

  const EM_MASK = (1n << BigInt(TRAITS_LENGTH - TEAM_UP_LENGTH)) - 1n;
  const LIMIT = 1;

  const handleOthers = (value: bigint): void => {
    // TODO: set to array, because emblems can be duplicated
    // TODO: simplified reduction of conditional expressions
    if (others & value) {
      return _setOthers((prev) => prev ^ value);
    }
    return value & EM_MASK
      ? getCount(others & EM_MASK) >= LIMIT
        ? _setOthers((prev) => value | (prev & ~EM_MASK))
        : _setOthers((prev) => prev | value)
      : getCount(others & ~EM_MASK)
      ? _setOthers((prev) => value | (prev & EM_MASK))
      : _setOthers((prev) => value | prev);
  };

  const fn = getAll(champions).reduce(
    (acc, x) => (C[x].c < 4 ? acc : acc | (1n << BigInt(x))),
    0n,
  );
  return {
    fn,
    others,
    setOthers: _setOthers,
    champions,
    setChampions,
    handleOthers,
  };
};
