const express = require("express");
const router = express.Router();
const categoryController = require("../controllers/categoryController");

router.get("/create", categoryController.create);
router.post("/create", categoryController.store);

router.get("/edit/:id", categoryController.edit);
router.put("/edit/:id", categoryController.update);

router.get("/delete/:id", categoryController.delete);
router.delete("/delete/:id", categoryController.destroy);


router.get("/", categoryController.index);
router.get("/:id", categoryController.show);
module.exports = router;