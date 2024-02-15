import React, { useState } from 'react';
import './App.css';

function App() {
  const [counter, setCounter] = useState(0);

  const addValue = () => { 
      setCounter(counter + 1)
    }
  const removeValue = () => {
      setCounter(counter - 1);
  }
  return (
    <>
      <h1>COUNTER VALUE</h1>
      <h2>COUNT IS : {counter}</h2>
      <button onClick={addValue}>Add Value</button>
      <br />
      <button onClick={removeValue}>Remove Value</button>
    </>
  );
}
export default App;


// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'


// function App() {

//   const [counters, setCounters] = useState([0])

//   function addCounter() {
//     setCounters(prev => [...prev, prev[prev.length - 1] + 1])
//   }


//   function removeCounter() {
//     setCounters(prev => [...prev].splice(0, prev.length - 1))
//     }
// return (
//     <>
//       <h1>React</h1>
//       <button onClick={addCounter}>Add value {counters.length <= 0 ? '0' : counters[counters.length - 1] + 1}</button>
//       <br />
//       <button onClick={removeCounter}>Remove value {counters[counters.length - 1]}</button>
//       <div>
//       <p>Updated counter values: {counters.join(', ')}</p>
//       </div>
//     </>
//   )
// }
// export default App