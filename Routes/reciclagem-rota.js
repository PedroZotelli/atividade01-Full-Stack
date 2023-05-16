const express = require("express")
const bodyParser = require("body-parser")
const ReciclagemController = require("../Controller/reciclagem-controller")
const { body, validationResult, matchedData } = require("express-validator")
const router = express.Router()

router.use(bodyParser.json())

router.post('/reciclagem',
    body('item').notEmpty().isString().withMessage("Item inválido"),
    body('imagem').isString().withMessage("A imagem é em string"),
    body('peso').isNumeric().withMessage("Apenas números"),
    body('data').isDate().withMessage("Data inválida"),
    body('pontos').isNumeric().withMessage("Apenas números"),
    body('usuario').isString().withMessage("Usuário inexistente"),
    async(req, res) => {
        console.log(matchedData(req));
        const validacao = validationResult(req).array();
        if (validacao.length === 0) {
            const novo = await ReciclagemController.criar(req.body.item, req.body.imagem, req.body.peso, req.body.data, req.body.pontos, req.body.usuario);
            res.json({ resultado: 'Reciclagem gerado!', reciclagem: novo });
        } else {
            res.status(401).json(validacao);
        }
    })

router.put('/reciclagem/novaimagem/:id', async(req, res) => {
    const atualizar = await ReciclagemController.update(req.params.id, req.body.img)
    if (atualizar) {
        res.json({ resultado: 'Imagem alterada com sucesso!', reciclagem: atualizar });
    } else res.status(400).json({ resultado: 'Requisição mal formulada (por exemplo, falta de um parâmetro)' });
})

router.get('/reciclagem/:id', async(req, res) => {
    const consulta = await ReciclagemController.read(req.params.id)
    if (consulta) {
        res.json({ resultado: 'Consulta realizada com sucesso!', reciclagem: consulta });
    } else res.status(400).json({ resultado: 'Requisição mal formulada (por exemplo, falta de um parâmetro)' });
})

router.get('/reciclagens', async(req, res) => {
    const todos = await ReciclagemController.readAny()
    res.json(todos)
})


router.put('/reciclagem/deletar/:id', async(req, res) => {
    const deletar = await ReciclagemController.deletar(req.params.id)
    if (deletar) {
        res.json({ resultado: 'Item deletado!' });
    } else res.status(400).json({ resultado: 'Requisição mal formulada (por exemplo, falta de um parâmetro)' });
})

module.exports = router;