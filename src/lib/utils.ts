import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const bs = (a: number[], x: number) => {
  let l = 0;
  let r = a.length - 1;
  let res = -1;
  while (l <= r) {
    const m = Math.floor((l + r) / 2);
    if (a[m] <= x) {
      res = m;
      l = m + 1;
    } else {
      r = m - 1;
    }
  }
  return res;
};

export const compareList = (l: number[], r: number[]) => {
  if (l.length !== r.length) {
    throw Error('Invalid length');
  }
  for (let i = 0; i < l.length; i++) {
    if (l[i] !== r[i]) {
      return l[i] - r[i];
    }
  }
  return 0;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const parseBigInt = (k: string, v: any) => {
  if (k === 'c') return BigInt(v);
  return v;
};
