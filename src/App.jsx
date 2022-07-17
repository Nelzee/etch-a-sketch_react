import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const arr = [1, 3, 5, 2, 5, 2, 3];

  const changeColor = (e) => {
    console.log(e.target.style);
    e.target.style.backgroundColor = "red";
  };

  return (
    <div className="App">
      {arr.map((item) => {
        return <div onMouseOver={changeColor}>1</div>;
      })}
    </div>
  );
}

export default App;
