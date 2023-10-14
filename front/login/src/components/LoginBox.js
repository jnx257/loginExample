import { useState } from "react";
import React from 'react'
import "../Login.css";
import Fields from "./Fields"
import RegisterBoxButton from "./RegisterButton";
import RegisterBox from "./RegisterBox";
import LoginSuccess from "./LoginSuccess";

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
        <RegisterBoxButton onClick={openRegisterBox}/>
        {isRegisterBox && <RegisterBox closeRegisterBox={()=> setIsRegisterBox(false)}/>}
        <LoginSuccess className='loginSuccess'/>
        </div>
    </> 
  );
}

export default Box;
