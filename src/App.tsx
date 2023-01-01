import { Cell } from "./components";
import { forest } from "./features";
import { useCelullarAutomata } from "./hooks";

const { data, simulator } = forest.prepare(100);

const App: React.FC = () => {
  const mesh = useCelullarAutomata(data, simulator);

  return (
    <>
      {mesh.map((column, i) => (
        <div key={i} style={{ display: "flex" }}>
          {column.map((cell, j) => (
            <Cell variant={cell} key={j} size={5} padding={1} />
          ))}
        </div>
      ))}
    </>
  );
};

export default App;
