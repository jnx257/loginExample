import "../Login.css";
import Fields from "./Fields"
import LoginButton from "./LoginButton";
import RegisterBoxButton from "./RegisterButton";

function Box() {
  return (
    <>
      <div className="LoginBox">
        <p className="BoxTitle">Sign In</p>
        <Fields/>
        <LoginButton/>
        <RegisterBoxButton/>
        </div>
    </> 
  );
}

export default Box;
