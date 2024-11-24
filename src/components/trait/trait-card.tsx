import { bs, cn } from '@/lib/utils';
import { useTranslation } from 'react-i18next';

interface IProps {
  id: string;
  count: number;
  active: number[];
  isUnique?: boolean;
}
type OmitId = Omit<IProps, 'id'>;

const TraitDesc = ({ count, active }: OmitId) => {
  if (count < active[0]) {
    return (
      <span>
        {count} / {active[0]}
      </span>
    );
  }
  const b = bs(active, count);
  return (
    <>
      {active.map((x, i) => (
        <span key={i}>
          <span className={cn([b === i && 'font-bold'])}>{x}</span>
          {i !== active.length - 1 && <span>{'>'}</span>}
        </span>
      ))}
    </>
  );
};

const traitBackground = ({ count, active, isUnique }: OmitId) => {
  if (count < active[0]) {
    return 'darken';
  }
  if (isUnique) {
    return 'unique';
  }
  const b = bs(active, count);
  return ['bronze', 'silver', 'gold', 'gold', 'chromatic'][b];
};

export const TraitCard = ({ id, count, active, isUnique }: IProps) => {
  const { t } = useTranslation();
  return (
    <div className="flex items-center bg-secondary rounded-sm py-1 px-2 gap-1.5 text-xs md:text-sm">
      <div
        className="relative w-6 h-6"
        style={{
          background: `url(/background/${traitBackground({
            count,
            active,
            isUnique,
          })}.svg) center center / cover no-repeat`,
        }}
      >
        <img
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[15px] w-[15px] object-cover object-center"
          src={`/traits/black/${id}.svg`}
        />
      </div>
      <div className="font-bold">{count}</div>
      <div className="pl-0.5">
        <div>{t(`traits.${id}`)}</div>
        <div className="">
          <TraitDesc count={count} active={active} />
        </div>
      </div>
    </div>
  );
};
