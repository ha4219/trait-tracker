import { ChampionContainer } from '@/components/champion/champion-container';
import { TraitContainer } from '@/components/trait/trait-container';
import { Gold } from '@/components/gold';
import { useChampions } from '@/hooks/use-champions';
import { cn } from '@/lib/utils';
import { MinusIcon, PlusIcon } from 'lucide-react';

interface IProps {
  c: bigint;
  t: [number, number, number, number, number, number];
  className?: string;
}

const AppendCard = ({ c, className }: IProps) => {
  return (
    <div className="my-1">
      <div className="inline-block">
        <PlusIcon className="text-green-500 w-8 h-8" />
      </div>
      <ChampionContainer
        champions={c}
        className={cn(className, `rounded-md border border-green-500`)}
        dir="rtl"
      />
    </div>
  );
};

const RemoveCard = ({ c, className }: IProps) => {
  return (
    <div className="my-1">
      <div className="">
        <MinusIcon className="text-red-500 w-8 h-8" />
      </div>
      <div className={cn('rounded-md border border-red-500 my-1 ')}>
        <ChampionContainer champions={c} className={className} dir="rtl" />
      </div>
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
        <Gold
          x={t[0]}
          size={20}
          className="text-xl font-semibold inline-block"
        />
      </div>
      <ChampionContainer
        champions={c}
        className="rounded-md grid grid-cols-4 gap-4 sm:grid-cols-6 md:grid-cols-10"
      />
      <div className="my-5">
        <TraitContainer champions={c} />
      </div>
      {appendChampions !== 0n && (
        <AppendCard
          c={appendChampions}
          t={t}
          className="grid grid-cols-4 gap-4 sm:grid-cols-6 md:grid-cols-10"
        />
      )}
      {removeChampions !== 0n && (
        <RemoveCard
          c={removeChampions}
          t={t}
          className="grid grid-cols-4 gap-4 sm:grid-cols-6 md:grid-cols-10"
        />
      )}
    </div>
  );
};
