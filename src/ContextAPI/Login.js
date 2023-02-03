import React , { useState } from 'react'
import './App.css'
import Login from './Components/Login'

function Login() {
    const {setUsername}=useContext(LoginContext);
    return(
        <>
        <input
        type="text"
        placeholder='Username...'
        onChange={(event)=>{
            setUsername(event.target.value);
        }}></input>

        <input type="text" placeholder='Password...' ></input>
        <button 
        onClick={()=>{
            setShowProfile(true);
        }}
        >
        LOGIN
        </button>
      </>
    );

}

export default Login
