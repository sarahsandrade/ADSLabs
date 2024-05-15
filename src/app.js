require("dotenv").config({path: ".env"})
const express = require("express")
const responsavelRouter = require("./routes/responsavel")

const app = express()
app.use(express.json())
app.use("/pessoa", responsavelRouter)

app.listen(process.env.PORT ,console.log(`Servidor escutando na porta ${process.env.PORT}`))

module.exports = app
