import express from 'express'
import bodyparser from 'body-parser'
import cors from 'cors'
import mysql from 'mysql2'
import dotenv from 'dotenv'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

dotenv.config()

const app = express()
app.use(cors())
app.use(bodyparser.json())
app.use(express.json())


const port = process.env.PORT || 8080


//this is the first step to connect mysql DB with our API
const db = mysql.createConnection({
    host: process.env.HOST ,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME   
}) 


db.connect((err)=>{
    if(err){
        console.error('Something went wrong trying to connect in DB', err)
    }else{
        console.log('connected in my db')
    }
})


app.listen(port, ()=>{
    console.log(`using port ${port}`)
})

app.get("/",(req,res)=>{
    res.status(200).send('teste funcionando!')
})


//register an account
app.post('/register', async (req,res)=>{

 try{   
    const {email, name, password, confPassword} = req.body

    if(password !== confPassword){
        res.status(500).send("the password is not the same as confirmed one")
    }
    if(!email || !name || !password || !confPassword){
        res.status(500).send('one or more fields have an error. please check and try again')
    }
    db.query('SELECT email FROM Accounts WHERE ?', [email], (err, result)=>{
        if(err){
            res.status(500).send(`error:${err}`)
            console.log(err)
        }
        else if(result.length > 0){
            res.status(400).send('email already in use')
        }
    })

    const encPass = await bcrypt.hash(password, 10)

    db.query('INSERT INTO Accounts (email, name, password) VALUES (?,?,?)',[email,name,encPass], (err) =>{
            if(err){
        console.log(`Error ${err}`)
        res.status(500).send(`something went wrong ${err}`)
    }
    else{
        console.log('User registered succesfully.')
        res.status(200).send('User registered succesfully.')
    }
    })}

    catch(err){
        console.log(err)
    }
})

app.post('/login', async (req,res)=>{
    const {email,password} = req.body
    console.log(email,password)
    if(!email || !password){
        res.status(400).send('one or more fields have an error. please check and try again')
    }

    try{
        db.query('SELECT * FROM Accounts WHERE email = ?', [email], (err,result)=>{
            if(err){
                console.log(`There was an error: ${err}`)
                res.status(500).send('Database error')
            }
            if(result.length === 0){
                res.status(400).send('This user does not exist.')
            }
            const user = result[0]
            const secPassword = user.password
            const userEmail = user.email
    
        const passwordMatch = bcrypt.compare(password, secPassword)
        if(passwordMatch){
            const token = jwt.sign({username:userEmail}, process.env.JWT_SECRET )
            res.status(200).send(token)    
        }
        else{
            res.status(400).send('Authentication failed. Incorrect password.')
        }
    })
    }catch(error){
        console.log(`occured an error: ${error}`)
        res.status(500).send(`Something went wrong ${error}`)
    }

})
