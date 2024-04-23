import { useState } from "react";

export default function Monkey() {
  const [visible, setVisible] = useState(false);
  return (
    <div className="monkey-button">
      <button
        onClick={() => {
          setVisible(!visible);
        }}
      >
        Show/ Hide Monkey
      </button>
      {visible && <p className="monkey">🐒</p>}
    </div>
  );
}
