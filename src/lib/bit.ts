export const getAll = (bit: bigint) => {
  const res = [];
  bit >>= 1n;

  for (let i = 1; i < 61; i++) {
    if (bit & 1n) {
      res.push(i);
    }
    bit >>= 1n;
  }
  return res;
};

export const numArrToBit = (arr: number[]) =>
  arr.reduce((acc, x) => acc | (1n << BigInt(x)), 0n);

export const getCount = (bit: bigint) => {
  let count = 0;
  while (bit) {
    count += Number(bit & 1n);
    bit >>= 1n;
  }
  return count;
};
