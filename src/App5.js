import React from 'react'

export default function App5() {
    let names = ["Neha", "Surendra"];
  return (
    <ul>
        {names.map((e,i) => (
            <li key={i}>{e}</li>
        ))}
    </ul>
  );
}
