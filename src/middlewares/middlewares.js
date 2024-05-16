function validacao (req, res, next){
    if(!req.body.nome)
        return res.status(400).send({messege: "favor enviar nome"})
    if(!req.body.nascimento)
        return res.status(400).send({messege: "favor enviar data de nascimento"})
    return next()
}
module.exports = {validacao}