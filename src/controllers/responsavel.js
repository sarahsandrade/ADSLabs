const service = require("../services/responsavel")

function list (req,res) {
    return res.status(200).send({
        responsavel: service.list
    })
}

function create (req,res) {
    return res.status(200).send("ola")
}

function update (req,res) {
    return res.status(200).send("ola")
}

function remove (req,res) {
    return res.status(200).send("ola")
}

module.exports = {list,create,update,remove}