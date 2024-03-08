import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Loginform from './Loginform';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App1 name="John" age={34}/> */}
    {/* <Calc a={10} b={5}/> */}
    {/* <Result marks={40}/> */}
    {/* <App2 user=""/> */}
    {/* <App3 names={["Neha","Surendra"]}/> */}
    {/* <App3 students={{name:'Surendra',age:24}}/> */}
    <Loginform/>
  </React.StrictMode>
);