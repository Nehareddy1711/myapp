import React, { useRef } from 'react';

export default function App23() {
  const divRef = useRef(null);
  const handleColorChange = () => {
    divRef.current.style.color = 'red';
  };
  return (
    <div ref={divRef}>
      <p>Hello! Welcome to Mars</p>
      <button onClick={handleColorChange}>Click</button>
    </div>
  );
};