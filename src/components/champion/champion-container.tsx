import { getAll } from '@/lib/bit';
import { ChampionCard } from './champion-card';
import { champions as C } from '@/data';

interface IProps {
  champions: bigint;
}
export const ChampionContainer = ({ champions }: IProps) => {
  return (
    <div className="rounded-md grid grid-cols-10 gap-4 ">
      {getAll(champions).map((x) => (
        <ChampionCard key={x} {...C[x]} />
      ))}
    </div>
  );
};
