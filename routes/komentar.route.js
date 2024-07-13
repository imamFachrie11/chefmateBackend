const express = require("express");

const router = express.Router();

const {
  createKomentar,
  deleteKomentar,
  getKomentar,
} = require("../controllers/komentar.controller");
const {
  komentarCreatevalidation,
} = require("../middlewares/komentar.middleware");
const { validateToken } = require("../middlewares/auth");

router.post("/:id_recipe", validateToken, createKomentar);
router.delete("/delete", deleteKomentar);
router.get("/:id_recipe?", getKomentar);

module.exports = router;
