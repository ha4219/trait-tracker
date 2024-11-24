import { useChampions } from '@/hooks/use-champions';
import { useEffect, useState } from 'react';
import { compareList } from '@/lib/utils';

import { champions as C } from '@/data';
import { getAll } from '@/lib/bit';
import { ResultCard } from './result-card';
import { DataType, DEFAULT_DATA } from '@/default';
import { useTranslation } from 'react-i18next';

export const ResultContainer = () => {
  const { champions, fn } = useChampions();
  const [data, setData] = useState<DataType[]>(DEFAULT_DATA);
  const [url, setUrl] = useState(new Set([0n]));
  const { t } = useTranslation();

  useEffect(() => {
    if (url.has(fn)) {
      return;
    }
    setUrl((prev) => new Set([fn, ...prev]));
    fetch(`/data/${fn}.json`)
      .then((res) => res.json())
      .then((res) => setData((prev) => [...prev, ...res]));
  }, [fn, url]);

  const res = data
    .map((x) => {
      const c = BigInt(x.c) & ~champions;
      const t: [number, number, number, number, number, number] = [
        0, 0, 0, 0, 0, 0,
      ];
      getAll(c).forEach((y) => {
        t[0] += C[y].c;
        t[6 - C[y].c] += 1;
      });
      return { c: BigInt(x.c), t };
    })
    .sort((l, r) => compareList(l.t, r.t))
    .slice(0, 10);

  return (
    <div>
      <h2 className="text-3xl font-extrabold tracking-tight lg:text-4xl">
        {t('description.compositions')}
      </h2>
      <div>
        {res.map((x, i) => (
          <ResultCard key={x.c.toString() + i} {...x} />
        ))}
      </div>
    </div>
  );
};
