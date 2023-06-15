import React from "react";
import { createRoot } from "react-dom/client";
import App from "./components/App.jsx";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </BrowserRouter>
);
// TEST FOR COMMIT
