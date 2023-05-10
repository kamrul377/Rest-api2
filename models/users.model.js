

const {v4:uuidv4} = require('uuid')

let users = [
    {
        id: uuidv4(),
        userName : "kamrul",
        userEmail : "mdkamrul@gmail.com"
    },
    {
        id: uuidv4(),
        userName : "saide",
        userEmail : "mdkamrul@gmail.com"
    },
    {
        id: uuidv4(),
        userName : "azad",
        userEmail : "adad@gmail.com"
    },
    {
        id: uuidv4(),
        userName : "rashed",
        userEmail : "reshed@gmail.com"
    },
    {
        id: uuidv4(),
        userName : "tanvir",
        userEmail : "tanvir@gmail.com"
    },
]

module.exports = users