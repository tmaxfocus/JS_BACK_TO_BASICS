import { useState } from "react";
import "./App.css";
import FlashLight from "./states/FlashLight";
import Counter from "./states/Counter";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <FlashLight />
      <Counter />
    </>
  );
}

export default App;
