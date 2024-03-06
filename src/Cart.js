import React from 'react'
import "./Cart.css"
export default function Cart() {
  let products= [
    { id: 1, name: "Coffee", image: "Coffee.png"},
    { id: 2, name: "Mocha", image: "Mocha.jpg"},
    { id: 3, name: "Lattee", image: "Lattee.jpg"},
    { id: 4, name: "Tea", image: "Tea.webp"},
    { id: 5, name: "GreenTea", image: "Green Tea.webp"},
    { id: 6, name: "BlackCoffee", image: "BlackCoffee.webp"},
];
return (
  <div>
      {products.map((value,i) => (
          <img src={value.image}/>
      ))}
  </div>
)
}
