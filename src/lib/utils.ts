import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const bs = (a: number[], x: number) => {
  let l = 0;
  let r = a.length - 1;
  let res = 0;
  while (l <= r) {
    const m = Math.floor((l + r) / 2);
    if (a[m] <= x) {
      res = m;
      l = m + 1;
    } else if (a[m] > x) {
      r = m - 1;
    }
  }
  return a[res];
};
