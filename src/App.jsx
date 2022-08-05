import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Screen from "./components/screen";
import Controllers from "./components/Controllers";

function App() {
  return (
    <div className="container">
      <Controllers />
      <Screen />
    </div>
  );
}

export default App;
