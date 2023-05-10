
const express = require('express')
const app = express()
const {getUsers, createUsers, updateUsers, deleteUsers} = require('../controllers/users.controllers')
// const createUsers = require('../controllers/users.controllers')


app.get("/users",getUsers)
app.post("/users",createUsers)
app.put("/users/:id",updateUsers)
app.delete("/users/:id",deleteUsers)



module.exports = app