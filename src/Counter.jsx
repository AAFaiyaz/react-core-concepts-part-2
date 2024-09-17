import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  const handleAdd = () => {
    const newCount = count + 1;
    setCount(newCount);
  };
  const handleReduce = () => setCount(count - 1);
  const handleReset = () => {
    setCount(0);
  };
  return (
    <div style={{ border: "2px solid cyan" }}>
      <h3>Counter : {count}</h3>
      <button onClick={handleAdd}>Add</button>
      <button onClick={handleReduce}>Reduce</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}
