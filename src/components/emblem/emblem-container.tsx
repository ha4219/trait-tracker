import { EmblemCard } from './emblem-card';
import { traits as T, TRAITS_LENGTH } from '@/data';
import { getAll } from '@/lib/bit';
import { cn } from '@/lib/utils';

interface IProps {
  others: bigint;
  canClick?: boolean;
  className?: string;
  isDefault?: boolean;
}

export const EmblemContainer = ({ others, className, canClick }: IProps) => {
  const emblems = getAll(others, TRAITS_LENGTH)
    .map((x) => T[x])
    .filter((x) => x.hasEmblem);

  return (
    <div className={cn('', className)}>
      {emblems.map((x) => (
        <EmblemCard key={x.id} {...x} canClick={canClick} />
      ))}
    </div>
  );
};
