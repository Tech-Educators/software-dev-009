"use client";
import { useState } from "react";

export default function Clicker() {
  const [clicks, setClicks] = useState(0);

  function incrementClicks() {
    setClicks(clicks + 1);
  }

  return (
    <div className="clientside">
      <p>There have been {clicks} clicks</p>
      <button onClick={incrementClicks}>Click me</button>
    </div>
  );
}
