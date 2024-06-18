const express = require("express");

const router = express.Router();

const { index } = require("../controllers/recipe.controllers");

router.get("/", index);

module.exports = router;
