const express = require("express");

const router = express.Router();

const {
  favorite,
  addFavorite,
  getFavoriteByIdAndRecipeId,
  deleteFavorite,
} = require("../controllers/favorite.controllers");
const { validateToken } = require("../middlewares/auth");

router.post("/", addFavorite);
router.get("/", validateToken, getFavoriteByIdAndRecipeId);
router.delete("/:id", deleteFavorite);

module.exports = router;
