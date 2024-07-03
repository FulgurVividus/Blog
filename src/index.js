import React from "react";
import ReactDOM from "react-dom/client";
import "./style.css";
import App from "../src/App-memo";
import AppV2 from "../src/App-v2";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AppV2 />
  </React.StrictMode>
);
