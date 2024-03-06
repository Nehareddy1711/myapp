import React from 'react';
import {useState, useEffect} from "react";

// export default function StateComponent() {
//     const [count, setCount] = useState(0);
//     console.log("Component loaded");
//   return (
//     <div>
//         <button onClick={() => setCount((prevState) => prevState + 1)}>Click</button>
//         <span>{count}</span>
//     </div>
//   );
// }

export default function StateComponent() {
  const [runs, setRuns] = useState(0);
  const [wickets, setWickets] = useState(0);
  console.log("Component loaded");
  useEffect(() => {
    console.log("Better Luck Next Time!");
  },[wickets]);
return (
  <div>
      <button onClick={() => setRuns((prevState) => prevState + 1)}>Runs({runs})</button>
      <button onClick={() => setWickets((prevState) => prevState + 1)}>Wickets({wickets})</button>
  </div>
);
}
