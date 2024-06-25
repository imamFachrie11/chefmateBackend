const express = require('express');

const router = express.Router();

const { favorite } = require("../controllers/favorite.controllers")

router.post("/", addFavorite);
router.get("/:id/:recipeId", getFavoriteByIdAndRecipeId);

module.exports = router;