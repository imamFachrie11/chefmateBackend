const express = require("express");

const router = express.Router();

const { validateToken } = require("../middlewares/auth");
const {
  index,
  create,
  update,
  deleteBahan,
} = require("../controllers/bahan.controllers");

router.get("/:id_recipe?", index);
router.post("/:id_recipe", validateToken, create);
router.patch("/:id_bahan", validateToken, update);
router.delete("/:id_bahan", validateToken, deleteBahan);

module.exports = router;
