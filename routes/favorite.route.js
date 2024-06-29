const express = require("express");

const router = express.Router();

const {
  favorite,
  addFavorite,
  getFavoriteByIdAndRecipeId,
  deleteFavorite,
} = require("../controllers/favorite.controllers");

router.post("/", addFavorite);
router.get("/:id/:id_recipe", getFavoriteByIdAndRecipeId);
router.delete("/:id", deleteFavorite);

module.exports = router;
