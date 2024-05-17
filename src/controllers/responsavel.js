const service = require("../services/responsavel")

function list (req,res) {
    service.list(req.query)
        .then((responsaveis) => {
            return res.send({responsaveis: responsaveis})
        },(error)=>{
            return res.status(500).send({message:error})
        })
}
function listnPendentes (req,res) {
    service.listTarefasnPendentes(req.query)
        .then((responsaveis) => {
            return res.send({responsaveis: responsaveis})
        },(error)=>{
            return res.status(500).send({message:error})
        })
}
function create (req,res) {
    service.create(req.body)
        .then((novoResponsavel) =>{
            return res.send({
                message:"Novo Responsavel criado",
                responsavel: novoResponsavel
            })
        },(error)=>{
            return res.status(500).send({message:error})
        })
}

function update (req,res) {
    service.update(req.params.id,req.body)
        .then((ResponsavelEditado) =>{
            return res.status(201).send({
                message:"Responsavel editado",
                responsavel: ResponsavelEditado
            })
        },(error)=>{
            return res.status(500).send({message:error})
        })
}

function remove (req,res) {
    service.remove(req.params.id)
        .then((ResponsavelRemovido) =>{
            return res.send({
                message:"Responsavel removido",
                responsavel: ResponsavelRemovido
            })
        },(error)=>{
            return res.status(500).send({message:error})
        })
}

module.exports = {list,listnPendentes,create,update,remove}