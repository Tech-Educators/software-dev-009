import React from "react";
import { useState, useEffect } from "react";

export default function TimerDirty() {
  console.log("THIS TIMER COMPONENT JUST RENDERED");
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("TIMER HAS RENDERED THROUGHT USEEFFECT");
    setInterval(() => {
      setCount((currentCount) => currentCount + 0.5);
    }, 1000);
  }, []);

  return <div>Count: {count}</div>;
}
