import React from "react";
import ReactDOM from "react-dom/client";
import { PROTOCOL_VERSION } from "@mra/protocol";
import App from "./ui/App";
import "./ui/styles.css";

document.documentElement.dataset.protocol = PROTOCOL_VERSION;

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
