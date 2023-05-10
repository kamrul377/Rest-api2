
const app = require('./app')
// const config = require('./config/config')

// const port = config.app.port || 300

// require('dotenv').config()
// const port = process.env.port || 3000
const port= 8086


app.listen(port, () => {

    console.log(`server running at http://localhost:${port}`)

})