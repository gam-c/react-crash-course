import { React, useState } from "react";

function Counter() {
  const [counter, setCounter] = useState(0);
  const increase = () => {
    setCounter((counter) => counter + 1);
  };
  const decrease = () => {
    setCounter((counter) => counter - 1);
  };

  return (
    <div>
      <button onClick={decrease}>-</button>
      <span>{counter}</span>
      <button onClick={increase}>+</button>
    </div>
  );
}

export default Counter;
