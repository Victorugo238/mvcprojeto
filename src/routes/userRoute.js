const express = require("express");
// Variável para configuração de rotas
const router = express.Router();
// Controller do usuário
const userController = require("../controllers/UserController");

// GET - Pegar dados, ou seja, leitura
// POST - Cadastrar/Salvar dados
// PATCH/PUT - Atualizar dados
// DELETE - Deletar dados

router.get("/", userController.index);
router.get("/:id", userController.show);
router.post("/", userController.store);
router.patch("/:id", userController.update);
router.put("/:id", userController.update);
router.delete("/:id", userController.delete);

router.post("/save/:id/:name?", userController.save);

module.exports = router;
