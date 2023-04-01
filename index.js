const mongoose = require('mongoose');
const premioController = require('./Controller/premio-controller');
const reciclagemController = require ('./Controller/reciclagem-controller');
const usuarioController = require ('./Controller/usuario-controller');


const uri = "mongodb+srv://teste:teste123@aulafs.ozpictj.mongodb.net/Atividade01?retryWrites=true&w=majority";

mongoose.connect(uri).then(async (conn) => {

    //const new_usuario = await usuarioController.criar('Caio', '4321', 24, "2010", "4030");
    //console.log('Usuário Cadastrado' + new_usuario)

    //const atualizar_usuario = await usuarioController.atualizar("642885bb7224d255fe22155e", 'Henrique');
    //console.log('Usuário Alterado')

    //const procurar_usuario = await usuarioController.procurar("642885bb7224d255fe22155e");
    //console.log("Usuário Encontrado" + procurar_usuario)

    //const remove_usuario = await usuarioController.remover("642885bb7224d255fe22155e");
    //console.log('Usuário Removido')


    //const new_reciclagem = await reciclagemController.criar('latinha', 'lata.jpeg', 5, 0112 , 321, '642885bb7224d255fe22155e');
    //console.log('Reciclagem Registrada' + new_reciclagem)

    //const atualizar_reciclagem = await reciclagemController.atualizar("6428863538242e67f647a4a2", 'Sacola');
    //console.log('Item Alterado')

    //const procurar_reciclagem = await reciclagemController.procurar("6428863538242e67f647a4a2");
    //console.log("Reciclagem Encontrada:" + procurar_reciclagem)

    //const remove_reciclagem = await reciclagemController.remover("6428863538242e67f647a4a2");
    //console.log('Reciclagem Removida')


    //const new_premio = await premioController.criar('Celular', 2000, 1);
    //console.log('Prêmio Criado', + new_premio)

    //const atualizar_premio = await premioController.atualizar('6428863538242e67f647a4a4', 'Carro');
    //console.log('Prêmio Alterado' + atualizar_premio)

    
    //const procurar_premio = await premioController.procurar('6428863538242e67f647a4a4');
    //console.log('Prêmio Encontrado' + procurar_premio)

    //const remove_premio = await premioController.remover("6428863538242e67f647a4a4");
    //console.log('Prêmio Removido')
    
})