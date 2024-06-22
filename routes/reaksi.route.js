const express = require("express");

const router = express.Router();

const { index, create } = require("../controllers/reaksi.controllers");
const { validateToken } = require("../middlewares/auth");

router.get("/:id_reaksi?", index);
router.post("/:id_recipe", validateToken, create);

module.exports = router;
