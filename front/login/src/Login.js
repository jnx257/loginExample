import './Login.css';
import Box from './components/LoginBox'
import RegisterBox from './components/RegisterBox';

function Login() {
  return (
    <div className="Login">
      <header className="Login-header">
        <Box/>
        <RegisterBox/>
      </header>
    </div>
  );
}

export default Login;
