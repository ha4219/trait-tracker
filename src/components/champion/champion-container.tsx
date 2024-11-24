import { getAll } from '@/lib/bit';
import { ChampionCard } from './champion-card';
import { champions as C } from '@/data';
import { cn } from '@/lib/utils';

interface IProps {
  champions: bigint;
  className?: string;
  canClick?: boolean;
  dir?: string;
}
export const ChampionContainer = ({
  champions,
  className,
  canClick,
  dir,
}: IProps) => {
  return (
    <div className={cn('', className)} dir={dir}>
      {getAll(champions).map((x) => (
        <ChampionCard key={x} {...C[x]} canClick={canClick} />
      ))}
    </div>
  );
};
