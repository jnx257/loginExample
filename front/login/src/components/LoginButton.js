import '../Login.css'

function LoginButton ({onClick}){
    return (
    <>
    <div className='LogButton'>
    <button className='LoginButton' onClick={onClick}>Sign In</button>
    </div>
    </>
    
)}

export default LoginButton