const express = require("express");
const router = express.Router();
const indexController = require("../controllers/IndexController");

// localhost:3000/
router.get("/", indexController.home);

module.exports = router;
