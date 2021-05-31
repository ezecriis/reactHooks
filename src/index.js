import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import ThemeContex from "./context/ThemeContex";

ReactDOM.render(
  <React.StrictMode>
    <ThemeContex.Provider value="red">
      <App />
    </ThemeContex.Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
