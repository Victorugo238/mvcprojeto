const express = require("express");
const router = express.Router();

const userController = require("../controllers/UserController");

// localhost:3000/user/create
router.get("/create", userController.create);

// localhost:3000/user/
router.get("/", userController.index);
// localhost:3000/user/4
router.get("/:id", userController.show);

module.exports = router;
