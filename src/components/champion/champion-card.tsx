import { Champion } from '@/data';
import { useChampions } from '@/hooks/use-champions';
import { Gold } from '@/components/gold';

export const ChampionCard = ({
  c,
  img,
  id,
  k,
  canClick,
}: Champion & { canClick?: boolean }) => {
  const color = ['#848999', '#11b288', '#207ac7', '#c440da', '#ffb93b'][c - 1];
  const { setChampions } = useChampions();

  const onClick = () =>
    canClick && setChampions((prev) => prev ^ (1n << BigInt(k)));

  return (
    <button
      className="relative overflow-hidden rounded-md border-2 min-h-16 min-w-16 max-w-32 max-h-32"
      style={{ borderColor: color }}
      onClick={onClick}
    >
      <img
        className="w-full h-full object-cover object-center"
        src={`/champions/${img}`}
        alt={id}
      />
      <Gold
        x={c}
        className={`absolute top-[-3px] right-0 px-0.5 rounded-bl-md flex items-center justify-center font-semibold text-sm text-white`}
        style={{ backgroundColor: color }}
      />
      <span className="absolute bottom-0 left-0 w-full text-center text-white font-semibold">
        {id}
      </span>
    </button>
  );
};
