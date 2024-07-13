const express = require("express");

const router = express.Router();

const { validateToken } = require("../middlewares/auth");
const {
  index,
  update,
  createRecipe,
  getRecipes,
  deleteRecipe,
  getRecipesLimit8,
} = require("../controllers/recipe.controllers");

router.get("/limit/:limit?", getRecipesLimit8);
router.get("/:id_recipe?", index);
router.patch("/:id_recipe?", validateToken, update);

router.post("/recipes", validateToken, createRecipe);
router.get("/recipes/data", getRecipes);

router.delete("/delete", deleteRecipe);

module.exports = router;
