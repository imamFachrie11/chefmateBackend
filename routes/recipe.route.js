const express = require("express");

const router = express.Router();

const { validateToken } = require("../middlewares/auth");
const { index, update } = require("../controllers/recipe.controllers");

router.get("/", index);
router.patch("/:id", validateToken, update);

module.exports = router;
