import React from "react";
import { Variant } from "../d";

type Props = {
  variant?: Variant;
};

const colors: Record<Variant, string> = {
  empty: 'white',
  fire: "red",
  forest: "green",
};

const size = 20;

const Cell: React.FC<Props> = ({ variant }) => (
  <div
    style={{
      backgroundColor: variant ? colors[variant] : "white",
      padding: 10,
      border: "1px solid #000",
      width: size,
      height: size,
    }}
  >
    {" "}
  </div>
);

export default Cell;
