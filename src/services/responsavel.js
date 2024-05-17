const Responsavel = require("../models/responsavel")
const Tarefa = require("../models/tarefa")

async function list (queryParams){
    return await Responsavel.findAll({where: queryParams})
}
async function listTarefasnPendentes () {
    const lista = []
    const responsaveis = await Responsavel.findAll()
    const tarefa = await Tarefa.findAll()
    let pendente = false
    responsaveis.forEach(responsavel => {
        tarefa.forEach(tarefa => {
            if(tarefa.responsaveiId===responsavel.id)
                if(tarefa.pendente)
                    pendente = true
        })
        if(!pendente)
            lista.push(responsavel)
    })
    return lista
}
async function create (dados) {
    const novoResponsavel = await Responsavel.create(dados)
    return novoResponsavel
}

async function update (id,dados) {
    const responsavelEncontrado = await Responsavel.findByPk(id)

    responsavelEncontrado.nome = dados.nome
    await responsavelEncontrado.save();
    return responsavelEncontrado
}

async function remove (id) {
    const responsavelEncontrado = await Responsavel.findByPk(id)
    await responsavelEncontrado.destroy()
}
module.exports = {list,listTarefasnPendentes,create,update,remove}