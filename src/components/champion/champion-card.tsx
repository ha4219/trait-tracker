import { Champion } from '@/data';
import { useChampions } from '@/hooks/use-champions';
import { Gold } from '@/components/gold';
import { useTranslation } from 'react-i18next';

export const ChampionCard = ({
  c,
  img,
  id,
  k,
  canClick,
}: Champion & { canClick?: boolean }) => {
  const color = ['#b5b5b5', '#14cf11', '#2c76e9', '#db1fe9', '#b8a31c'][c - 1];
  const { setChampions } = useChampions();
  const { t } = useTranslation();

  const onClick = () =>
    canClick && setChampions((prev) => prev ^ (1n << BigInt(k)));

  return (
    <button
      className="relative overflow-hidden rounded-md border-2 min-h-8 min-w-8 max-w-32 max-h-32"
      style={{ borderColor: color }}
      onClick={onClick}
    >
      <img
        className="w-full h-full object-cover object-center"
        src={`champions/${img}`}
        alt={id}
      />
      <Gold
        x={c}
        className={`absolute top-[-3px] right-0 px-0.5 rounded-bl-md flex items-center justify-center font-semibold text-xs text-white md:text-sm`}
        style={{ backgroundColor: color }}
      />
      <span className="absolute bottom-0 left-0 w-full text-center text-white text-xs md:text-sm font-semibold text-nowrap">
        {t(`champions.${id}`)}
      </span>
    </button>
  );
};
