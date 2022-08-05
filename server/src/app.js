require("dotenv").config()
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors')
const helmet = require('helmet')

//connecting to my cluster database online
mongoose.connect(process.env.MONGO_URI);

//initializing the app 
const app = express()

//required middleware
app.use(cors())
app.use(helmet())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

require("./helpers/readFiles")(app, "routes")

//Test server page running
app.get('/', (req, res) => {
    res.send(`Hello World ,,,, backend is running on port ${PORT}`)
})

module.exports = app