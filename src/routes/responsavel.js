const express = require("express")
const controller = require("../controllers/responsavel")
const middlewares = require("../middlewares/middlewares")

const router = express.Router()

router.get("/list", controller.list)
router.get("/npendentes", controller.listnPendentes)
router.post("/",middlewares.validacaoR, controller.create)
router.put("/:id", controller.update)
router.delete("/:id", controller.remove)


module.exports = router