import { Cell } from "./components";
import { useCelullarAutomata } from "./hooks";

const App: React.FC = () => {
  const mesh = useCelullarAutomata(
    [
      ["forest", "forest", "forest"],
      [undefined, "forest", "forest"],
      ["forest", "forest", "fire"],
    ],
    (cell) => cell
  );

  return (
    <>
      {mesh.map((column, i) => (
        <div key={i} style={{ display: "flex" }}>
          {column.map((cell, j) => (
            <Cell variant={cell} key={j} />
          ))}
        </div>
      ))}
    </>
  );
};

export default App;

