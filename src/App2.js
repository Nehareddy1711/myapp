import React from 'react'
// import import { AiFillAudio } from "react-icons/ai";

// import Login from './Login';
// import Home from './Home';
export default function App2(props) {
    return props.user === ""&&(
        <div><h2>Login Form</h2>
        <input type="text" placeholder="UserName"></input>
        <input type="password" placeholder="Password"></input>
        <button>Login</button>
        </div>
    )
    // :(
    // <div>Hello {props.user}</div>
    // );
    // return (props.user===""? <Login/>: <Home username={props.user}/>);
}
// {
//     if(props.user===""){
//         return <Login/>;
//     }else{
//         return <Home username={props.user}/>;
//     }
// }

// }