const express = require("express");

const router = express.Router();

const { validateToken } = require("../middlewares/auth");
const { index, create, update } = require("../controllers/reaksi.controllers");

router.get("/:id_reaksi?", index);
router.post("/:id_recipe", validateToken, create);
router.patch("/:id_reaksi", validateToken, update);

module.exports = router;
