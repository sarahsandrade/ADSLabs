const service = require("../services/tarefas")

function list (req,res) {
    service.list(req.query)
        .then((tarefas) => {
            return res.send({tarefas: tarefas})
        },(error)=>{
            return res.status(500).send({message:error})
        })
}
function listarPorResponsavel (req,res) {
    service.listarPorResponsavel(req.params.responsaveiId)
        .then((tarefas) => {
            return res.send({tarefas: tarefas})
        },(error)=>{
            return res.status(500).send({message:error})
        })
}

function create (req,res) {
    service.create(req.body)
        .then((novaTarefa) =>{
            return res.status(201).send({
                message:"Nova Tarefa criada",
                tarefa: novaTarefa
            })
        },(error)=>{
            return res.status(500).send({message:error})
        })
}

function update (req,res) {
    service.update(req.params.id,req.body)
        .then((TarefaEditada) =>{

                return res.status(200).send({
                    message:"Tarefa editada",
                    tarefa: TarefaEditada
                })
        },(error)=>{
            return res.status(500).send({message:error})
        })
}
function entregar (req,res) {
    service.entregarTarefa(req.params.id,req.body)
        .then((TarefaEntregue) =>{
            if(!TarefaEntregue.pendente)
                return res.status(200).send({
                    message:"Tarefa entregue",
                    tarefa: TarefaEntregue
            })
            if(TarefaEntregue.pendente)
                return res.status(400).send({
                    message:"Tarefa fora do prazo",
            })

        },(error)=>{
            return res.status(500).send({message:error})
        })
}

function remove (req,res) {
    service.remove(req.params.id)
        .then((TarefaRemovida) =>{
            return res.send({
                message:"Tarefa removida",
                tarefa: TarefaRemovida
            })
        },(error)=>{
            return res.status(500).send({message:error})
        })
}

module.exports = {list,listarPorResponsavel,create,update,entregar,remove}