import "../Login.css"

function FieldsRegister (){
    return(
        <>
        <div className="LoginFields">
        <form>
            <label for='name'>Name:</label>
            <input type="text" placeholder="Your name"></input>
            <label for="email">Email:</label>
            <input type="email"placeholder="your email" id="email"></input>
            <label for="password">Password:</label>
            <input type="password"placeholder="your password" id="password"></input>
            <label for="password">Confirmed Password:</label>
            <input type="password"placeholder="confirm password" id="confPassword"></input>
            
        </form>
        </div>
        </>
    )
}

export default FieldsRegister