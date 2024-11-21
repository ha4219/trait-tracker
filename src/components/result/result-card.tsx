import { ChampionContainer } from '@/components/champion/champion-container';
import { TraitContainer } from '@/components/trait/trait-container';
import { Gold } from '@/components/gold';
import { useChampions } from '@/hooks/use-champions';

interface IProps {
  c: bigint;
  t: [number, number, number, number, number, number];
}

const AppendCard = ({ c }: IProps) => {
  return (
    <div className="rounded-md border border-green-500">
      <ChampionContainer champions={c} className="grid grid-cols-8" />
    </div>
  );
};

const RemoveCard = ({ c }: IProps) => {
  return (
    <div className="rounded-md border border-red-500 p-1">
      <ChampionContainer champions={c} className="grid grid-cols-8" />
    </div>
  );
};

export const ResultCard = ({ c, t }: IProps) => {
  const { champions } = useChampions();
  const appendChampions = c & ~champions;
  const removeChampions = ~c & champions;
  return (
    <div className="">
      <Gold x={t[0]} />
      <ChampionContainer champions={c} className="grid grid-cols-8" />
      {/* <TraitContainer champions={c} /> */}
      {appendChampions !== 0n && <AppendCard c={appendChampions} t={t} />}
      {removeChampions !== 0n && <RemoveCard c={removeChampions} t={t} />}
    </div>
  );
};
