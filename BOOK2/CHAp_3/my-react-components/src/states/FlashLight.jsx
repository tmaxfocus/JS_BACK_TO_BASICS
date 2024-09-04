import { useState } from "react";
import Lightbulb from "./Lightbulb";

function FlashLight() {
  const [isOn, setIsOn] = useState(false);

  return (
    <div>
      <Lightbulb glowing={isOn}></Lightbulb>
      <button onClick={() => setIsOn(!isOn)}>Change State</button>
      <button onClick={() => setIsOn(false)}>Turn off</button>
    </div>
  );
}
export default FlashLight;
