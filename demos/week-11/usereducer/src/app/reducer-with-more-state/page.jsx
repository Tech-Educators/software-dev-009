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
    case "incrementModifier":
      return {
        ...prevState,
        modifier: prevState.modifier + 1,
      };
  }
}

export default function ReducerPage() {
  const [state, dispatch] = useReducer(reducer, { count: 0, modifier: 5 });

  return (
    <div>
      <h2>useReducer with another state variable</h2>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: "increment", payload: 1 })}>
        Increase Count by 1
      </button>
      <button onClick={() => dispatch({ type: "decrement", payload: 1 })}>
        Decrease Count by 1
      </button>
      <p>This is where it gets funky (or more funky)</p>
      <button onClick={() => dispatch({ type: "incrementModifier" })}>
        Increase modifier
      </button>
      <button
        onClick={() => dispatch({ type: "increment", payload: state.modifier })}
      >
        Increase by {state.modifier}
      </button>
    </div>
  );
}
