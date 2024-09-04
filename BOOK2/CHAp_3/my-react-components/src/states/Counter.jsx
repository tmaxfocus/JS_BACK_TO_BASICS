import { useState } from "react";

function Counter() {
  const [currentCount, setCurrentCount] = useState(0);

  function incrementCount() {
    const newCount = currentCount + 1;

    setCurrentCount(newCount);
  }

  function decreaseCount() {
    const newCount = currentCount - 1;

    setCurrentCount(newCount < 0 ? 0 : newCount);
  }

  return (
    <div>
      <h3>{currentCount}</h3>
      <button onClick={incrementCount}>+</button>
      <button onClick={decreaseCount}>-</button>
    </div>
  );
}

export default Counter;
