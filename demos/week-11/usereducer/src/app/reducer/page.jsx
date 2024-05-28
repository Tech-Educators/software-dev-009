"use client";
import { useReducer } from "react";

function reducer(prevState, action) {
  switch (action.type) {
    case "increment":
      return {
        ...prevState,
        count: prevState.count + action.payload,
      };
    case "decrement":
      return {
        ...prevState,
        count: prevState.count - action.payload,
      };
  }
}

export default function ReducerPage() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <div>
      <h2>useReducer</h2>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: "increment", payload: 1 })}>
        Increase Count
      </button>
      <button onClick={() => dispatch({ type: "decrement", payload: 1 })}>
        Decrease Count
      </button>
      <p>This is where it gets funky (or more funky)</p>
      <button onClick={() => dispatch({ type: "increment", payload: 100 })}>
        Click for 100!
      </button>
    </div>
  );
}
