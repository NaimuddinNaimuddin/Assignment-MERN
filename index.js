const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const routing = require('./routes/user')

const PORT = process.env.PORT || 8080

const app = express()

app.use(cors())
app.use('/uploads', express.static('uploads'))
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

// db connecting
require('./db')

app.use('/api', routing)

app.listen(PORT, () => {
    console.log(`APP STARTED PORT : ${PORT}`)
})
