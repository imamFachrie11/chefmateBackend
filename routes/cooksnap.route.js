const express = require("express");

const router = express.Router();

const { validateToken } = require("../middlewares/auth");
const {
  index,
  create,
  update,
  deleteCooksnap,
} = require("../controllers/cooksnap.controller");

router.get("/:id_recipe?", index);
router.post("/:id_recipe", validateToken, create);
router.patch("/:id_cooksnap", validateToken, update);
router.delete("/:id_cooksnap", validateToken, deleteCooksnap);

module.exports = router;
