import { TraitCard } from './trait-card';
import { traits as T } from '@/data';
import { getCount, numArrToBit } from '@/lib/bit';

interface IProps {
  champions: bigint;
}

export const TraitContainer = ({ champions }: IProps) => {
  const traits = Object.values(T)
    .map(({ id, arr, active, isTeamUp, isUnique }) => {
      const bit = numArrToBit(arr);
      const count = getCount(bit & champions);
      return {
        id,
        bit,
        arr,
        active,
        isActive: count >= active[0],
        count,
        isTeamUp,
        isUnique,
      };
    })
    .filter(({ count, isTeamUp }) => count > 0 && !isTeamUp)
    .sort((l, r) => {
      if (l.isUnique == r.isUnique) {
        if (l.isActive === r.isActive) {
          return r.count - l.count;
        }
        return l.isActive ? -1 : 1;
      }
      return l.isUnique ? -1 : 1;
    });
  return (
    <div className="flex flex-wrap gap-2">
      {traits.map((x) => (
        <TraitCard key={x.id} {...x} />
      ))}
    </div>
  );
};
