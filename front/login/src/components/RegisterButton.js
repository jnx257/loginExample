import '../Login.css'


function RegisterBoxButton ({onClick}){
    return (
    <>
    <div className='registerButton'>
    <button className='Button' onClick={onClick} >Don't have an account?<br></br>Register here</button>
    </div>
    </>
    
)}

    export default RegisterBoxButton