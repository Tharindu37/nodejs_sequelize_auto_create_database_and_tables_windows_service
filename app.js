const express = require('express')
const bodyParser = require('body-parser')

const app = express()
app.use(bodyParser.json())
app.get('/', (req, res)=>{
    res.send("Hello World!, MySQL Server")
})

const postsRoute = require('./routes/posts')

app.use('/posts', postsRoute)

module.exports = app