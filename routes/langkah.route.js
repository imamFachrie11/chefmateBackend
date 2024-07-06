const express = require("express");

const router = express.Router();

const { validateToken } = require("../middlewares/auth");
const {
  index,
  create,
  update,
  deleteLangkah,
} = require("../controllers/langkah.controllers");

router.get("/:id_recipe?", index);
router.post("/:id_recipe", validateToken, create);
router.patch("/:id_langkah", validateToken, update);
router.delete("/:id_langkah", validateToken, deleteLangkah);

module.exports = router;
