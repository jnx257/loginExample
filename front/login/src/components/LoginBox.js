import { useState } from "react";
import React from 'react'
import "../Login.css";
import Fields from "./Fields"
import RegisterBoxButton from "./RegisterButton";
import RegisterBox from "./RegisterBox";

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
        </div>
    </> 
  );
}

export default Box;
