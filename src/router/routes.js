const { Router } = require("express")
const routes = Router()
const controller = require("../controller/controller")

routes.get('/', controller.home)
routes.get('/search/:title', controller.searchMovie)
routes.get('/info/:imdbID', controller.infoMovie)

module.exports = routes