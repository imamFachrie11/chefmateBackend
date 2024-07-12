const express = require("express");

const router = express.Router();

const { validateToken } = require("../middlewares/auth");
const {
  index,
  update,
  createRecipe,
  getRecipes,
  deleteRecipe,
} = require("../controllers/recipe.controllers");

router.get("/:id_recipe?", index);
router.patch("/:id_recipe?", validateToken, update);

router.post("/recipes", createRecipe);
router.get("/recipes/data", getRecipes);

router.delete("/delete", deleteRecipe);

module.exports = router;
