const { default: mongoose } = require("mongoose")

require("dotenv").config()
mongoose.set('strictQuery',true)

const dev = {
    app:{
        port: process.env.port || 4000
    },
    db:{
        url: process.env.url || "mongodb://localhost:27017/userDemoDb"
    },

}

module.exports  = dev