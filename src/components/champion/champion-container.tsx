import { getAll } from '@/lib/bit';
import { ChampionCard } from './champion-card';
import { champions as C } from '@/data';
import { cn } from '@/lib/utils';

interface IProps {
  champions: bigint;
  className?: string;
  canClick?: boolean;
}
export const ChampionContainer = ({
  champions,
  className,
  canClick,
}: IProps) => {
  return (
    <div className={cn('', className)}>
      {getAll(champions).map((x) => (
        <ChampionCard key={x} {...C[x]} canClick={canClick} />
      ))}
    </div>
  );
};
