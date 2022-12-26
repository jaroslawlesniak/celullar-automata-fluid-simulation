import { useState, useEffect } from 'react'
import { Mesh, Variant } from "../d";

const useCelullarAutomata = (initial: Mesh, simulator: (cell: Variant) => Variant): Mesh => {
  const [mesh, setMesh] = useState(initial);

  useEffect(() => {
    const interval = setInterval(() => {
      console.log("Interval");
    }, 1000);

    return clearInterval(interval);
  }, [])

  return mesh;
};

export default useCelullarAutomata;
