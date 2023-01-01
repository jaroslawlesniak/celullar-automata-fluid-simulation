import { Mesh, Simulator, Variant } from "../d";
import { randomizeWithWeights } from "../lib/generator";

const random = (min: number, max: number) => () => {
  return Math.floor(Math.random() * (max - min) + min);
};

type Prepare = {
  data: Mesh;
  simulator: Simulator;
};

const factor = 100;

const variants: Array<Variant> = randomizeWithWeights<Variant>(
  { value: 'fire', percentage: 1 },
  { value: 'forest', percentage: 50 * factor },
  { value: 'empty', percentage: 20 * factor },
  { value: 'water', percentage: 3 * factor },
  { value: 'litter', percentage: 10 * factor },
  { value: 'stone', percentage: 10 * factor },
  { value: 'empty', percentage: 6 * factor },
);

const randomize = (size: number): Mesh => {
  const rand = random(0, variants.length);

  const data = new Array<Array<Variant>>(size);

  for (let i = 0; i < size; i++) {
    data[i] = new Array(size);

    for (let j = 0; j < size; j++) {
      data[i][j] = variants[rand()];
    }
  }

  return data;
};

const simulator: Simulator = (neighborhood: Variant[]) => (cell: Variant) => {
  if (neighborhood.some((e) => e === "fire") && (cell === "forest" || cell === 'litter')) {
    return "fire";
  }

  if (cell === 'fire') {
    return 'ashes';
  }

  if (cell === 'ashes') {
    return 'empty';
  }

  if (cell === 'empty') {
    return 'litter';
  }

  if (cell === 'litter') {
    return 'forest';
  }

  return cell;
};

export const prepare = (size = 5): Prepare => ({
  data: randomize(size),
  simulator,
});
