// JS imports
import React from "react";
import ReactDOM from "react-dom";

// CSS imports
import "./styles/main.scss";

// Component imports
import App from "./components/app";

// App render
ReactDOM.render(
  <div className="bg-slate-800 h-screen">
    <App></App>
  </div>,
  document.getElementById("root")
);
