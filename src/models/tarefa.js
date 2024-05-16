const database = require("../database/database")
const Sequilize = require("sequelize")
const Responsavel = require("./responsavel")

const Tarefa = database.define("tarefas",{
    id: {
        type: Sequilize.INTEGER,
        primaryKey: true,
        autoIncrement:true
    },
    titulo: Sequilize.STRING,
    descricao:{
        type:Sequilize.TEXT,
        allowNull: false
    } ,
    data_limite: Sequilize.DATEONLY,
    status: {
        type: Sequilize.ENUM('pendente','entregue'),
        defaultValue: 'pendente'
    }

}, {
    timestamp: true
})
Tarefa.belongsTo(Responsavel)

module.exports = Tarefa