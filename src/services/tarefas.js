const Responsavel = require("../models/responsavel")
const Tarefa = require("../models/tarefa")

async function list (queryParams){
    return await Tarefa.findAll({where: queryParams})
}

async function create (dados) {
    const novaTarefa = await Tarefa.create(dados)
    return novaTarefa
}

async function update (id,dados) {
    const tarefaEncontrada = await Tarefa.findByPk(id)

    tarefaEncontrada.descricao = dados.descricao


    await tarefaEncontrada.save();
    return tarefaEncontrada
}
async function entregarTarefa (id) {
    const tarefaEncontrada = await Tarefa.findByPk(id)
    data = new Date(tarefaEncontrada.data_limite)
    dataAtual = new Date()
    if(dataAtual<data){
        tarefaEncontrada.pendente = false
        await tarefaEncontrada.save();
    }
    return tarefaEncontrada
}

async function remove (id) {
    const tarefaEncontrada = await Tarefa.findByPk(id)
    await tarefaEncontrada.destroy()
}
module.exports = {list,create,update,entregarTarefa,remove}