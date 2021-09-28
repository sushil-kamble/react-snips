import { useState } from "react";

function Counter() {
  const [counter, setCounter] = useState(0);
  const increment = () => {
    setCounter(counter + 1);
  };
  return (
    <div>
      <h1>Counter</h1>
      <hr />
      <h2>{counter}</h2>
      <button onClick={increment}>Click me</button>
    </div>
  );
}

export default Counter;
