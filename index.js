const mongoose = require('mongoose')

const express = require("express")

const usuarioRoute = require("./Routes/usuario-rota")
const reciclagemRoute = require("./Routes/reciclagem-rota")
const premioRoute = require("./Routes/premio-rota")

const app = express()

app.use(usuarioRoute)
app.use(reciclagemRoute)
app.use(premioRoute)

app.get("/", (req, res) => {
    res.send("Olá!")
})

app.use((req, res) => {
    res.status(404).json({ msg: "Endpoint inexistente!" })
})

const uri = "mongodb+srv://teste:teste123@aulafs.ozpictj.mongodb.net/Atividade01?retryWrites=true&w=majority";

mongoose.connect(uri).then(() => {
    app.listen(3000, () => console.log("Iniciando o servidor"))
}).catch((err) => console.log(err))