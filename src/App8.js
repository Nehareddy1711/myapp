import React from 'react'

export default function App8(props) {
  return (
    <div style = {{backgroundColor: 'red', color: 'white'}}>
        Hello {props.name}. Are you {props.age}?
    </div>
    )
}
App1.defaultProps = {name: "Cathy", age: 20};