import React from 'react'
import "./Cart.css"
export default function Cart() {
  let products= [
    { name: "Coffee", image: "Coffee.png"},
    { name: "Mocha", image: "Mocha.jpg"},
    { name: "Lattee", image: "Lattee.jpg"},
    { name: "Tea", image: "Tea.webp"},
    { name: "GreenTea", image: "Green Tea.webp"},
    { name: "BlackCoffee", image: "BlackCoffee.webp"},
];
return(
  <div>
    {products.map((item, index) =>(
      <div key={index}>
        <img src={item.image} alt={`name ${index + 1}`} style={{width: 100}} />
        <p>{item.name}</p>
        </div>
    ))}
  </div>
);
}