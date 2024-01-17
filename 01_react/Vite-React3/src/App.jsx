import { useState } from "react";
import "./App.css";

function App() {
  let [Counter, setCounter] = useState(0);

  //let Counter=5
  const addValue = () => {
    if (Counter < 20) {
      Counter += 1;
      setCounter(Counter);
      //console.log("Counter value :- ", Counter);
    } else {
      alert("Counter value not more than 20");
    }

    //console.log('value Added',Math.floor(Math.random()*100));
  };

  const rmvValue = () => {
    if (Counter > 0) {
      Counter -= 1;
      setCounter(Counter);
      //console.log("Counter value :- ", Counter);
    } else {
      alert("Negative value not allowed...!");
    }

    //console.log('value Added',Math.floor(Math.random()*100));
  };

  return (
    <>
      <br></br>
      <h1>Hello React || Vite Dev Community</h1>
      <h2>Add value :{Counter}</h2>
      <button id="add" onClick={addValue}>
        Add (+)
      </button>
      <button id="rmv" onClick={rmvValue}>
        Remove (-)
      </button>
    </>
  );
}

export default App;
