const config = require('./config')

const mongoose = require('mongoose')

const dburl = config.db.url

mongoose.connect(dburl).then(()=>{
    console.log("connected")
})
.catch((error)=>{
    console.log(error)    
    process.exit(1)
})

