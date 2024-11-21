import { AugmentCard } from './augment-card';
import { traits as T, TRAITS_LENGTH } from '@/data';
import { getAll } from '@/lib/bit';
import { cn } from '@/lib/utils';

interface IProps {
  others: bigint;
  className?: string;
  canClick?: boolean;
  isDefault?: boolean;
}

export const AugmentContainer = ({ others, className, canClick }: IProps) => {
  const augments = getAll(others, TRAITS_LENGTH)
    .map((x) => T[x])
    .filter((x) => x.isTeamUp);

  return (
    <div className={cn('', className)}>
      {augments.map((x) => (
        <AugmentCard key={x.id} {...x} canClick={canClick} />
      ))}
    </div>
  );
};
