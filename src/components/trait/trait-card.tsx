import { bs } from '@/lib/utils';

interface IProps {
  id: string;
  bit: bigint;
  arr: number[];
  count: number;
  active: number[];
}

export const TraitCard = ({ id, bit, count, arr, active }: IProps) => {
  return (
    <div className="flex items-center bg-secondary rounded-sm py-1 px-2 gap-1.5 text-xs">
      <div
        className="relative w-6 h-6"
        style={{
          background: `url(/background/bronze.svg) center center / cover no-repeat`,
        }}
      >
        <img
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[15px] w-[15px] object-cover object-center"
          src={`/traits/black/${id}.svg`}
        />
      </div>
      <div className="font-bold">{count}</div>
      <div className="">
        <div>{id}</div>
        <div>{active.join('>')}</div>
      </div>
    </div>
  );
};
