const express = require("express");

const router = express.Router();

const {
  createRecipe,
  getRecipes,
} = require("../controllers/creat_recipe.controllers");

const { validateToken } = require("../middlewares/auth");
const { index, update } = require("../controllers/recipe.controllers");

router.get("/:id_recipe?", index);
router.patch("/:id_recipe?", validateToken, update);

router.post("/recipes", createRecipe);
router.get("/recipes", getRecipes);

module.exports = router;
