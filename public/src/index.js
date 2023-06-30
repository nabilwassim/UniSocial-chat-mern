import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
// our entire react application will be inside this component
// and we will hook this component into root div المرتبط بالانديكس اتش تي ام ال ف بابليك
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
