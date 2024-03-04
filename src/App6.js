import React from 'react'

export default function App6() {
    let products = [
        {id:1, name:"Product 1", Price:33},
        {id:1, name:"Product 2", Price:43},
    ]
  return (
    <ul>
        {products.map((e,i) => (
            <li key={i}>{e.name}-{e.Price}</li>
        ))}
    </ul>
  )
}
