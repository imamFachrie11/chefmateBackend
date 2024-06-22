const express = require("express");

const router = express.Router();

const { validateToken } = require("../middlewares/auth");
const { index, update } = require("../controllers/recipe.controllers");

router.get("/:id_recipe?", index);
router.patch("/:id_recipe?", validateToken, update);

module.exports = router;
