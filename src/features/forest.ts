import { Mesh, Simulator, Variant } from "../d";

const random = (min: number, max: number) => () => {
  return Math.floor(Math.random() * (max - min) + min);
};

type Prepare = {
  data: Mesh;
  simulator: Simulator;
};

const variants: Array<Variant> = ["empty", "forest"];

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
}

const simulator: Simulator = (neighborhood: Variant[]) => (cell: Variant) =>
  cell === "forest" ? "fire" : "forest";

export const prepare = (size = 5): Prepare => ({
  data: randomize(size),
  simulator,
});
