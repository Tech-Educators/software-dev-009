import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import TimerClean from "./components/timerClean.jsx";
// import TimerDirty from "./components/timerDirty.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <TimerClean />
    {/* <TimerDirty/> */}
  </React.StrictMode>
);
