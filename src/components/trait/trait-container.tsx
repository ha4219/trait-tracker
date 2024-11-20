import { useChampions } from '@/hooks/use-champions';
import { TraitCard } from './trait-card';
import { trait as T } from '@/data';
import { getCount, numArrToBit } from '@/lib/bit';

export const TraitContainer = () => {
  const { champions } = useChampions();
  const traits = Object.values(T)
    .map(({ id, arr, active }) => {
      const bit = numArrToBit(arr);
      return {
        id: id,
        bit,
        arr,
        active,
        count: getCount(bit & champions),
      };
    })
    .filter(({ count }) => count > 0);
  return (
    <div className="flex flex-wrap gap-2">
      {traits.map((x) => (
        <TraitCard key={x.id} {...x} />
      ))}
    </div>
  );
};
