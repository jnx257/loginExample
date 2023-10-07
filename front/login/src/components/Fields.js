import "../Login.css"

function Fields (){

    return(
        <>
        <div className="LoginFields">
        <form>
            <label for="email">Email:</label>
            <input 
            type="email"
            placeholder="your email"
            value=""
            id="email"
             ></input>
            <label for="password">Password:</label>
            <input 
            type="password"
            placeholder="your password" 
            value=""
            id="password"
            ></input>
        </form>
        </div>
        
        </>
    )
}

export default Fields