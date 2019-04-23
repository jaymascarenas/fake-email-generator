import React from "react";
import ReactDOM from "react-dom";
import GenerateEmail from "./GenerateEmail";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <GenerateEmail />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
