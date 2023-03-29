const express = require("express")
const bodyParser = require("body-parser")
const routes = require("./router/routes")

const app = express()

//Configurando arquivos públicos
app.use(express.static('public'))

//Iniciando e configurando body-parser
app.use(bodyParser.urlencoded({"extended":false}))
app.use(bodyParser.json())

//Iniciando e configurndo view engine EJS
app.set('views', __dirname + '/views')
app.set('view engine', 'ejs')

//Iniciando rotas da aplicação
app.use('/schImdb', routes)

//Iniciando servidor na porta 3000
const port = 3000
const host = "localhost"
app.listen(port, () => {
    console.log(`Server on! http://${host}:${port}/schImdb`)
})