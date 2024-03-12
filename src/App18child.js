import React from 'react'
export default function App18child(props) {
  return (
    <div style={{backgroundColor:'black', color: 'white'}}>
        {props.children}
    </div>
  )
}