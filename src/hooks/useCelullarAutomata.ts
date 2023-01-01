import { useState, useEffect } from "react";

import type { Mesh, Simulator, Variant } from "../d";

const neighborhood = (i: number, j: number, rows: Variant[][]): Variant[] => [
  rows?.[i - 1]?.[j - 1],
  rows?.[i]?.[j - 1],
  rows?.[i + 1]?.[j - 1],
  rows?.[i - 1]?.[j],
  rows?.[i + 1]?.[j],
  rows?.[i - 1]?.[j + 1],
  rows?.[i]?.[j + 1],
  rows?.[i + 1]?.[j + 1],
];

const useCelullarAutomata = (
  initial: Mesh,
  simulator: Simulator,
): Mesh => {
  const [mesh, setMesh] = useState(initial);

  useEffect(() => {
    const interval = setInterval(() => {
      setMesh((rows) =>
        rows.map((column, i, rows) => column.map((cell, j) => simulator(neighborhood(i, j, rows))(cell)))
      );
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return mesh;
};

export default useCelullarAutomata;
