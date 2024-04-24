import React from "react";
import { useState, useEffect } from "react";

export default function TimerClean() {
  console.log("THIS TIMER COMPONENT JUST RENDERED");
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("TIMER HAS RENDERED THROUGHT USEEFFECT");
    const interval = setInterval(() => {
      setCount((currentCount) => currentCount + 1);
    }, 1000);

    return () => {
      console.log("WE HAVE CLEANED UP THE TIMER");
      clearInterval(interval);
    };
  }, []);

  return <div>Count: {count}</div>;
}
