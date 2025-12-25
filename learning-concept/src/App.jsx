import { useState } from "react";
import "./App.css";

function App() {
  return (
    <div className="app">
      <LightBulb />
    </div>
  );
}

function LightBulb() {
  const [bulbOn, setBulbOn] = useState(false);

  return (
    <div className="bulb-container">
      <Bulb bulbOn={bulbOn} />
      <Switch bulbOn={bulbOn} setBulbOn={setBulbOn} />
    </div>
  );
}

function Bulb({ bulbOn }) {
  return (
    <div className={`bulb ${bulbOn ? "on" : "off"}`} />
  );
}

function Switch({ bulbOn, setBulbOn }) {
  return (
    <button
      className="switch"
      onClick={() => setBulbOn(prev => !prev)}
    >
      {bulbOn ? "Turn OFF" : "Turn ON"}
    </button>
  );
}

export default App;
