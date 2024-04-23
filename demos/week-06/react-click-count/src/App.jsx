import { useState } from "react";
import MyComponent from "./MyComponent";

export default function App() {
  // const [stateVariable, mutationFunction] = useState(initialValue)
  const [count, setCount] = useState(0);

  function increaseCount() {
    setCount(count + 1);
  }

  return (
    <>
      <h1>{count}</h1>
      <button onClick={increaseCount}>Click me!</button>
      <MyComponent count={count} />
    </>
  );
}
