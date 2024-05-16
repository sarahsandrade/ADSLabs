const database = require("../database/database")
const Sequilize = require("sequelize")

const Responsaveis = database.define("responsaveis",{
    id: {
        type: Sequilize.INTEGER,
        primaryKey: true,
        autoIncrement:true
    },
    nome: Sequilize.STRING,
    data_nascimento: Sequilize.DATEONLY
}, {
    timestamp: true
})

module.exports = Responsaveis