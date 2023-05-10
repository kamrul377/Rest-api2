
const express = require("express")
const app  = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const usersRouter = require('./router/users.route')
const { application } = require("express")


app.use(cors())
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
// require('./config/db')

// app.get("/users",usersRouter)
app.use(usersRouter)


// connect database




app.get("/",(req,res)=>{
    res.send("hello")
})



app.use((req,res,next)=>{
    res.status(201).json({
        msg: "eror page.."
    })
})
app.use((err,req,res,next)=>{
    res.status(202).json({
        msg: "eror surver.."
    })
})




module.exports = app