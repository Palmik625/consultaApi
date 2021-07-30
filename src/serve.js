const express = require('express');
const app = express();
const port = 3020;
const bd = require('./infra/sqlite-bd')
const rotasConsulta = require('./controller/consulta-controller')

app.use(express.json())

rotasConsulta(app,bd)


app.listen(port, ()=> console.log(`Servidor rodando na porta ${port}`))