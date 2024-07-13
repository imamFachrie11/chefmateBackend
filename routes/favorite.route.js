const express = require("express");

const router = express.Router();

const {
  favorite,
  addFavorite,
  getFavoriteByIdAndRecipeId,
  deleteFavorite,
} = require("../controllers/favorite.controllers");
const { validateToken } = require("../middlewares/auth");

router.post("/:id_recipe?", validateToken, addFavorite);
router.get("/", validateToken, getFavoriteByIdAndRecipeId);
router.delete("/:id", deleteFavorite);

module.exports = router;
