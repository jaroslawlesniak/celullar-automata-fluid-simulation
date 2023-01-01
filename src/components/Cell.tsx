import React from "react";

import type { Variant } from "../d";

type Props = {
  size?: number;
  padding?: number;
  variant?: Variant;
};

const colors: Record<Variant, string> = {
  empty: 'white',
  fire: "red",
  forest: "green",
  ashes: '#402422',
  litter: 'lightgreen',
  stone: 'gray',
  water: 'blue',
};

const Cell: React.FC<Props> = ({ variant, size = 20, padding = 10 }) => (
  <div
    style={{
      backgroundColor: variant ? colors[variant] : "white",
      padding,
      border: "1px solid #000",
      width: size,
      height: size,
    }}
  >
    {" "}
  </div>
);

export default Cell;
