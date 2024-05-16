const express = require("express")
const controller = require("../controllers/responsavel")
const middlewares = require("../middlewares/middlewares")

const router = express.Router()

router.get("/", controller.list)
router.post("/",middlewares.validacao, controller.create)
router.put("/", controller.update)
router.delete("/:id", controller.remove)


module.exports = router