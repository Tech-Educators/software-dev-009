import { useState } from "react";

export default function MyComponent() {
  const [count, setCount] = useState(0);

  function increaseCount() {
    setCount(count + 1);
  }

  return (
    <>
      <h1>{count}</h1>
      <button onClick={increaseCount}>Click me!</button>
    </>
  );
}
