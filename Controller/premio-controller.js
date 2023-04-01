const mongoose = require('mongoose');
const Premio = require('../model/premio');


const criar = async (descricao , pontos, quantidade) => {

    const premio = new Premio({descricao: descricao, pontos: pontos, quantidade: quantidade });
    return premio.save()
}

const atualizar = async (id, new_premio)=> {

    try{
        
    const premio = Premio.updateOne({_id:new mongoose.Types.ObjectId(id)},{$set:{descricao:new_premio}});
    return premio;

    }

    catch(err) {

        return console.error(err);
    }

    
}

const procurar = async (id)=> {

    try{
        
    const premio =Premio.findOne({_id:new mongoose.Types.ObjectId(id)});
    return premio;
    
    }
    
    catch(err) {

        return console.error(err);
    }
}

const deletar = async (id)=> {

    try{

    const premio = Premio.deleteOne({_id:new mongoose.Types.ObjectId(id)})
    return premio;

    }

    catch(err) {

        return console.error(err);
    }
}

module.exports.criar = criar;
module.exports.atualizar = atualizar;
module.exports.procurar = procurar;
module.exports.deletar = deletar;