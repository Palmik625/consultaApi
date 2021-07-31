const express = require('express')
const cors = require('cors')
//Configs
const app = express()

//Import Router
const rotasTarefas = require('./controller/consulta-controller')

//Import DB
const db = require('./infra/sqlite-db')

//Middlewares
app.use(express.json())
app.use(cors())

//Usando Rotas
rotasConsultas(app,db)

module.exports = app