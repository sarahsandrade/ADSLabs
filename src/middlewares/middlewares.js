function validacaoR (req, res, next){

    if(!req.body.data_nascimento)
        return res.status(400).send({messege: "favor enviar data de nascimento"})
    if(nascimento(req.body.data_nascimento))
        return res.status(400).send({messege: "responsavel tem que ter nascido no minimo em 2014"})
    if(!req.body.nome)
        return res.status(400).send({messege: "favor enviar nome"})
    if(req.body.nome.length < 3)
        return res.status(400).send({messege: "nome não pode ter menos de 3 letras"})
    if(!letras(req.body.nome))
        return res.status(400).send({messege: "nome so pode ter letras"})
    return next()
}


function letras(str){
    return /^[a-zA-Z]+$/.test(str)
}
function nascimento (date){
    let data1= new Date (date)
    let data2= new Date ('2014')
    return data1.getFullYear() > data2.getFullYear()
}
module.exports = {validacaoR}