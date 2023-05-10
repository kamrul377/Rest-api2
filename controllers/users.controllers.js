let users = require("../models/users.model")
const {v4:uuidv4} = require('uuid')



// get method
exports.getUsers = (req,res)=>{
    res.status(300).json({users})
}


// create user
exports.createUsers = (req,res)=>{

    let newUser = {
        id: uuidv4(),
        userName : req.body.name,
        userEmail: req.body.email,
    }
    users.push(newUser)

    res.status(200).json({users})
}
// update users
exports.updateUsers = (req,res)=>{
    const userId = req.params.id;
    const {name,email} = req.body;
    
    users.filter((user)=>user.id === userId).map((selectedUser)=>{
        selectedUser.userName = name;
        selectedUser.userEmail = email;
    })


    res.status(300).json({users})
}
// delete users
exports.deleteUsers = (req,res)=>{
    const userId = req.params.id;

    users = users.filter((user)=>user.id !== userId);



    res.status(204).json({users})
}