const express = require('express')
const mongoose = require('mongoose')
const routes= require('./routes')

const app = express()

mongoose.connect('mongodb+srv://omnistack:Le6bC6mUgRswPhq@cluster0-bvr0o.mongodb.net/semana09?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

// req.query -> query string 
// req.param -> parametros 
// req.body -> corpo da requisição

app.use(express.json()) // usar formato json 
app.use(routes)

app.listen(3333)

// Le6bC6mUgRswPhq