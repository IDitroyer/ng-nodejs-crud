const express = require("express");
const router = express.Router();
const aprendices = require("../controllers/controladorAprendices");

router.get("/listar", aprendices.listar);
router.post("/agregar", aprendices.guardar);
router.get("/eliminar/:id", aprendices.eliminar);
router.get("/editar/:id",aprendices.editar );
router.post("/actualizar/:id", aprendices.actualizar);

module.exports = router;
