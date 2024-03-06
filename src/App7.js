import React from 'react'

export default function App7() {
    const greet = (a) =>{
        alert(a);
    }
  return (
    <button onClick={()=>greet('HI')}>Click</button>
  )
}
