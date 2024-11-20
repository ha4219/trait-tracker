import { Champion } from '@/data';
import { useChampions } from '@/hooks/use-champions';

export const ChampionCard = ({ c, img, id, k }: Champion) => {
  const color = ['#848999', '#11b288', '#207ac7', '#c440da', '#ffb93b'][c - 1];
  const { setChampions } = useChampions();

  const onClick = () => setChampions((prev) => prev ^ (1n << BigInt(k)));

  return (
    <button
      className={`relative overflow-hidden rounded-md border-2 h-32 min-w-16`}
      style={{ borderColor: color }}
      onClick={onClick}
    >
      <img
        className="w-full h-full object-cover object-center"
        src={`/champions/${img}`}
        alt={id}
      />
      <span
        className={`absolute top-[-3px] right-0 px-0.5 rounded-bl-md flex items-center justify-center font-semibold text-sm text-white`}
        style={{ backgroundColor: color }}
      >
        <img className="inline w-[14px] mr-0.5" src="/gold.png" />
        {c}
      </span>
      <span className="absolute bottom-0 left-0 w-full text-center text-white font-semibold">
        {id}
      </span>
    </button>
  );
};
