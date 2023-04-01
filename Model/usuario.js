const mongoose = require('mongoose');

const usuarioSchema = mongoose.Schema({

    nome: {type: String},
    senha: {type: String},
    pontos: {type: Number},
    latitude: {type: Number},
    longitude: {type: Number}

});

const Usuario = mongoose.model('Usuario', usuarioSchema);
module.exports = Usuario;