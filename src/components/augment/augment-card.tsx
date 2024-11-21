import { Trait } from '@/data';
import { useChampions } from '@/hooks/use-champions';

interface IProps {
  canClick?: boolean;
}

export const AugmentCard = ({ id, canClick, k }: IProps & Trait) => {
  const { handleOthers } = useChampions();
  const onClick = () => canClick && handleOthers(1n << BigInt(k));
  return (
    <button
      onClick={onClick}
      className="relative overflow-hidden rounded-md border-2 min-h-16 min-w-16 max-w-32 max-h-32"
    >
      <img
        src={`augment/${id.toLowerCase()}.png`}
        className="w-full h-full object-cover object-center"
        alt={id}
      />
    </button>
  );
};
