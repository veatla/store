import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

const element = document.getElementById("root")!
const root = createRoot(element);
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
