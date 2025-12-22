import { useRef, useState } from "react";
import "./App.css";

function App() {
  const [seconds, setseconds] = useState(0);
  const timerRef = useRef(null);
  const [millisec,setMillisec]=useState(0)
  
  function startclock() {
    if (timerRef.current !== null) return;
    timerRef.current=setInterval(() => {
      setMillisec(ms=>{
        if (ms===99) {
          setseconds(c=>c+1)
          return 0
        }
        return ms+1
      })
    }, 10);
    
  }

  function stopclock() {
    clearInterval(timerRef.current);
    
    timerRef.current = null;
  }

  return (
    <div className="container">
      <h1 className="count">{seconds}.{millisec}</h1>
      <div className="buttons">
        <button className="start" onClick={startclock}>Start</button>
        <button className="stop" onClick={stopclock}>Stop</button>
      </div>
    </div>
  );
}

export default App;