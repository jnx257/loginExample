
async function login(){
    const body = {email, password}

    fetch('http://localhost:8080/login', {
        method:'POST',
        headers:{
            "Content-Type" : "application/json"
        },
        body: JSON.stringify(body)
    })
    .then((response)=>{
        if(response.status === 200){
            const token = response.text()
            console.log(`Login successful. Token:${token}`)
        }
        else{
            const error = response.text()
            console.log(`something woring has happen: ${error}`)
        }
    })

    .catch((err) => console.log(err))
}

export {login}