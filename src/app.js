require("dotenv").config({path: ".env"})
require("./database/database")
const express = require("express")
const responsavelRouter = require("./routes/responsavel")
const tarefaRouter = require("./routes/tarefa")

const app = express()
const cors = require('cors')
app.use(cors())

app.use(express.json())

app.use("/responsavel", responsavelRouter)
app.use("/tarefas", tarefaRouter)

app.listen(process.env.PORT ,console.log(`Servidor escutando na porta ${process.env.PORT}`))

module.exports = app
