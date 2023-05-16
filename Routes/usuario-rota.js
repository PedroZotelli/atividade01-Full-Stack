const express = require("express")
const bodyParser = require("body-parser")
const UsuarioController = require("../Controller/usuario-controller")
const { body, validationResult, matchedData } = require("express-validator")
const router = express.Router()

router.use(bodyParser.json())

router.post('/usuario',
    body('nome').notEmpty().isString().withMessage("Username inválido"),
    body('senha').isNumeric().isLength({ max: 6 }).withMessage("A senha deve ter menos de 6 caracteres"),
    body('pontos').isNumeric().withMessage("Apenas números"),
    body('latitude').isNumeric().withMessage("Apenas números"),
    body('longitude').isNumeric().withMessage("Apenas números"),
    async(req, res) => {
        console.log(matchedData(req));
        const validacao = validationResult(req).array();
        if (validacao.length === 0) {
            const novo = await UsuarioController.criar(req.body.nome, req.body.senha, req.body.pontos, req.body.latitude, req.body.longitude);
            res.json({ resultado: 'Usuário criado!', usuario: novo });
        } else {
            res.status(401).json(validacao);
        }
    })

router.post('/usuario/login', async(req, res) => {
    const login = await UsuarioController.login(req.body.username, req.body.senha);
    if (login) {
        res.json(login);
    } else res.status(401).json(login);
})

router.put('/usuario/novasenha/:id', async(req, res) => {
    const atualizar = await UsuarioController.update(req.params.id, req.body.senha)
    if (atualizar) {
        res.json({ resultado: 'Senha alterada com sucesso!', usuario: atualizar });
    } else res.status(400).json({ resultado: 'Requisição mal formulada (por exemplo, falta de um parâmetro)' });
})

router.get('/usuario/:id', async(req, res) => {
    const consulta = await UsuarioController.read(req.params.id)
    if (consulta) {
        res.json({ resultado: 'Consulta realizada com sucesso!', usuario: consulta });
    } else res.status(400).json({ resultado: 'Requisição mal formulada (por exemplo, falta de um parâmetro)' });
})

router.get('/usuarios', async(req, res) => {
    const todos = await UsuarioController.readAny()
    res.json(todos)
})



router.put('/usuario/deletar/:id', async(req, res) => {
    const deletar = UsuarioController.deletar(req.params.id)
    if (deletar) {
        res.json({ resultado: 'Usuario deletado!', usuario: deletar });
    } else res.status(400).json({ resultado: 'Requisição mal formulada (por exemplo, falta de um parâmetro)' });
})




module.exports = router;