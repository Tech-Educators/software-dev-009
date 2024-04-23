import { useState } from "react";

export default function Votes() {
  const [myCounterState, setMyCounterState] = useState(0);

  function incrementCounter() {
    setMyCounterState(myCounterState + 1);
  }

  function decrementCounter() {
    if (myCounterState > 0) {
      setMyCounterState(myCounterState - 1);
    }
  }
  function resetCounter() {
    setMyCounterState(0);
  }

  return (
    <div className="votes">
      <h4>Do you think these trees are cool?</h4>
      <button onClick={resetCounter}>Reset</button>
      <p>{myCounterState}</p>
      <button onClick={incrementCounter}>👍🏽</button>
      <button onClick={decrementCounter}>👎🏽</button>
    </div>
  );
}
