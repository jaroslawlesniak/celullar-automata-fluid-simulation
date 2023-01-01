type Randomizable<T> = {
  value: T;
  percentage: number;
}

const prepare = <T>({ percentage, value }: Randomizable<T>): T[] => {
  const arr = [];

  for (let i = 0; i < percentage; i++) {
    arr.push(value);
  }

  return arr;
}

export const randomizeWithWeights = <T>(...args: Randomizable<T>[]): T[] =>
  args.map(prepare).flat();

