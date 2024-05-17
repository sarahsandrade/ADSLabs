const database = require("../database/database")
const Sequilize = require("sequelize")

const Responsavel = database.define("responsaveis",{
    id: {
        type: Sequilize.INTEGER,
        primaryKey: true,
        autoIncrement:true
    },
    nome: {
        type:Sequilize.STRING,
        allowNull: false
    },
    data_nascimento: {
        type:Sequilize.DATEONLY,
        allowNull: false
    }
}, {
    timestamp: true
})

module.exports = Responsavel