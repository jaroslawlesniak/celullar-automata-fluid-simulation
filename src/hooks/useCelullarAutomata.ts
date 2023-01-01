import { useState, useEffect } from "react";

import type { Mesh, Variant } from "../d";

const useCelullarAutomata = (
  initial: Mesh,
  simulator: (neighborhood: Variant[]) => (cell: Variant) => Variant
): Mesh => {
  const [mesh, setMesh] = useState(initial);

  useEffect(() => {
    const interval = setInterval(() => {
      setMesh((rows) =>
        rows.map((column) => column.map(simulator([])))
      );
    }, 1000);

    // return clearInterval(interval);
  }, []);

  return mesh;
};

export default useCelullarAutomata;
