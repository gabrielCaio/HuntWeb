const express = require('express')
const mongoose = require('mongoose');
const requireDir = require('require-dir')
const cors = require('cors')

//Iniciando o app
const app = express()
app.use(express.json())
app.use(cors())

//Iniciando o DB
mongoose.connect('mongodb+srv://caio:swordfish@teste-3or82.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
})
requireDir('./src/models/')

//Rotas
app.use('/', require("./src/routes"))

app.listen(3333)