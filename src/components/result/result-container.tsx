import { useChampions } from '@/hooks/use-champions';
import { useEffect, useState } from 'react';
import { compareList, parseBigInt } from '@/lib/utils';
import { ChampionContainer } from '../champion/champion-container';
import { TraitContainer } from '../trait/trait-container';

import { champions as C } from '@/data';
import { getAll } from '@/lib/bit';

type Data = {
  c: bigint;
  v: number;
  t: [number, number, number, number, number];
};

export const ResultContainer = () => {
  const { champions } = useChampions();
  const [data, setData] = useState<Data[]>([]);

  useEffect(() => {
    fetch('/comb/comb_6.json')
      .then((res) => res.text())
      .then((res) => JSON.parse(res, parseBigInt))
      .then(setData);
  }, []);

  const res = data
    // .slice(0, 10)
    .map((x) => {
      const c = x.c & ~champions;
      const t = [0, 0, 0, 0, 0, 0];
      getAll(c).forEach((y) => {
        t[0] += C[y].c;
        t[6 - C[y].c] += 1;
      });
      return { c, t, origin: x };
    })
    .sort((l, r) => compareList(l.t, r.t))
    .slice(0, 10);

  console.log(res);

  return (
    <div>
      <div className="bg-white text-black">
        {data.find((x) => x.c === 148618942322049024n) ? 1 : 0}
      </div>
      {res.map((x) => (
        <div>
          <ChampionContainer champions={x.c} />
          <TraitContainer champions={x.c} />
        </div>
      ))}
    </div>
  );
};
