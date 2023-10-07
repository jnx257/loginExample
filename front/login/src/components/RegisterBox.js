import "../Login.css"
import FieldsRegister from "./FieldsRegister"
import RegisterButton2 from "./RegisterButton2";

function RegisterBox ({closeRegisterBox}){

    return (      
      <>
          <div className="RegisterBox">
            <p className="BoxTitle">Sign Up</p>
            <button className="closeRegister" onClick={closeRegisterBox}>X</button>
            <FieldsRegister />
            <RegisterButton2/>
          </div>
      </>
    );
  }
  
export default RegisterBox