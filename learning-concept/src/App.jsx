import { useRef, useState } from "react";
import "./App.css";

function App() {
  const [time, setTime] = useState(0); // total milliseconds
  const timerRef = useRef(null);

  function startclock() {
    if (timerRef.current) return;

    timerRef.current = setInterval(() => {
      setTime((t) => t + 10);
    }, 10);
  }

  function stopclock() {
    clearInterval(timerRef.current);
    timerRef.current = null;
  }

  const seconds = Math.floor(time / 1000);
  const millisec = Math.floor((time % 1000) / 10);

  return (
    <div className="container">
      <h1 className="count">
        {seconds}.{millisec.toString().padStart(2, "0")}
      </h1>
      <div className="buttons">
        <button className="start" onClick={startclock}>Start</button>
        <button className="stop" onClick={stopclock}>Stop</button>
      </div>
    </div>
  );
}

export default App;
