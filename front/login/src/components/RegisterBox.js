import "../Login.css"
import FieldsRegister from "./FieldsRegister"

function RegisterBox (){
    return (
        <>
      <div className="RegisterBox">
        <p className="BoxTitle">Sign Up </p>
        <button className="closeRegister">X</button>
        <FieldsRegister/>
        </div>
        </>
    )
}
export default RegisterBox