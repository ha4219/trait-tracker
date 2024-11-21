import { useChampions } from '@/hooks/use-champions';
import { useEffect, useState } from 'react';
import { compareList, parseBigInt } from '@/lib/utils';

import { champions as C } from '@/data';
import { getAll } from '@/lib/bit';
import { ResultCard } from './result-card';

type Data = {
  c: bigint;
  v: number;
  t: [number, number, number, number, number];
};

export const ResultContainer = () => {
  const { champions } = useChampions();
  const [data, setData] = useState<Data[]>([]);

  useEffect(() => {
    fetch('/comb/a.json')
      .then((res) => res.text())
      .then((res) => JSON.parse(res, parseBigInt))
      .then((res) => setData((prev) => [...prev, ...res]));
  }, []);

  const res = data
    .map((x) => {
      const c = x.c & ~champions;
      const t: [number, number, number, number, number, number] = [
        0, 0, 0, 0, 0, 0,
      ];
      getAll(c).forEach((y) => {
        t[0] += C[y].c;
        t[6 - C[y].c] += 1;
      });
      return { c: x.c, t };
    })
    .sort((l, r) => compareList(l.t, r.t))
    .slice(0, 10);

  return (
    <div>
      {res.map((x, i) => (
        <ResultCard key={x.c.toString() + i} {...x} />
      ))}
    </div>
  );
};
