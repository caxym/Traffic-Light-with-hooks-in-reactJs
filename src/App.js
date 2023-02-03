import './App.css';
import { useState } from "react";

function App() {
  const [color, setColor] = useState("");
  return (
    <div className='contain-fluid d-flex mt-3'>
      <div className='semaforo'>
        <div
          onClick={() => setColor("red")}
          className={
            "light red" + (color === "red" ? " glow" : " offred")
          }></div>
        <div
          onClick={() => setColor("yellow")}
          className={
            "light yellow" + (color === "yellow" ? " glow" : " offyellow")
          }></div>
        <div
          onClick={() => setColor("green")}
          className={
            "light green" + (color === "green" ? " glow" : " offgreen")
          }></div>
      </div>
    </div>
  );
}

export default App;
