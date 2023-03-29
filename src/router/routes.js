const { Router } = require("express")
const routes = Router()
const controller = require("../controller/controller")

routes.get('/', controller.home)

module.exports = routes