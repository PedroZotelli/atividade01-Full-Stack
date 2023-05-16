const mongoose = require('mongoose');
const Usuario = require('../model/usuario');


const criar = async (nome, senha, pontos, latitude, longitude) => {

    const usuario = new Usuario({nome: nome, senha: senha, pontos: pontos, latitude: latitude, longitude: longitude});
    return usuario.save()

    const ret = await usuario.save();
    return ret;
}

var usuario = [];

const login = (nome, senha) => {
        const valido = Usuario.findOne({nome: nome, senha: senha});
        if (valido) {
            return { valido: true };
        } else return { valido: false };
}

const atualizar = async (id, new_user)=> {

    try{
        
    const usuario = Usuario.updateOne({_id:new mongoose.Types.ObjectId(id)},{$set:{descricao:new_user}});
    return usuario;

    }

    catch(err) {

        return console.error(err);
    }

    
}

const procurar = async (id)=> {

    try{
        
    const usuario = Usuario.findOne({_id:new mongoose.Types.ObjectId(id)});
    return usuario;
    
    }
    
    catch(err) {

        return console.error(err);
    }
}

const deletar = async (id)=> {

    try{

    const usuario = Usuario.deleteOne({_id:new mongoose.Types.ObjectId(id)})
    return usuario;

    }

    catch(err) {

        return console.error(err);
    }
}

module.exports.criar = criar;
module.exports.atualizar = atualizar;
module.exports.procurar = procurar;
module.exports.deletar = deletar;