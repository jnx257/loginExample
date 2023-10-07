import { useState } from "react";
import React from 'react'
import "../Login.css";
import Fields from "./Fields"
import LoginButton from "./LoginButton";
import RegisterBoxButton from "./RegisterButton";
import RegisterBox from "./RegisterBox";
import {login} from '../scripts/login.js'

function Box() {
  const [isRegisterBox, setIsRegisterBox ] = useState(false)
  
  function openRegisterBox (){
    setIsRegisterBox(true)
  }

  return (  
    <>
      <div className="LoginBox">
        <p className="BoxTitle">Sign In</p>
        <Fields />
        <LoginButton />
        <RegisterBoxButton onClick={openRegisterBox}/>
        {isRegisterBox && <RegisterBox closeRegisterBox={()=> setIsRegisterBox(false)}/>}
        </div>
    </> 
  );
}

export default Box;
