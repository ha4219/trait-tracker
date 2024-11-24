import { ChampionContainer } from '@/components/champion/champion-container';
import { TraitContainer } from '@/components/trait/trait-container';
import { Gold } from '@/components/gold';
import { useChampions } from '@/hooks/use-champions';
import { cn } from '@/lib/utils';

interface IProps {
  c: bigint;
  t: [number, number, number, number, number, number];
  className?: string;
}

const AppendCard = ({ c, className }: IProps) => {
  return (
    <div className={cn('rounded-md border border-green-500 my-1')}>
      <ChampionContainer champions={c} className={className} />
    </div>
  );
};

const RemoveCard = ({ c, className }: IProps) => {
  return (
    <div className={cn('rounded-md border border-red-500 my-1 rtl')}>
      <ChampionContainer champions={c} className={className} />
    </div>
  );
};

export const ResultCard = ({ c, t }: IProps) => {
  const { champions } = useChampions();
  const appendChampions = c & ~champions;
  const removeChampions = ~c & champions;
  return (
    <div className="border p-10">
      <div className="py-5">
        <Gold x={t[0]} />
      </div>
      <ChampionContainer champions={c} className="grid grid-cols-10 gap-4" />
      <div className="my-5">
        <TraitContainer champions={c} />
      </div>
      {appendChampions !== 0n && (
        <AppendCard
          c={appendChampions}
          t={t}
          className="grid grid-cols-10 gap-4"
        />
      )}
      {removeChampions !== 0n && (
        <RemoveCard
          c={removeChampions}
          t={t}
          className="grid grid-cols-10 gap-4"
        />
      )}
    </div>
  );
};
