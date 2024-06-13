const express = require("express")
const controller = require("../controllers/tarefas")
const middlewares = require("../middlewares/middlewares")

const router = express.Router()

router.get("/", controller.list)
router.get("/:responsaveiId", controller.listarPorResponsavel)
router.post("/", controller.create)
router.put("/:id", controller.update)
router.put("/entregar/:id", controller.entregar)
router.delete("/:id", controller.remove)


module.exports = router