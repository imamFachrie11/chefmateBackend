const express = require("express");

const router = express.Router();

const {
  createReaksi,
  lookReaksi,
} = require("../controllers/reaksi.controllers");
const { validateToken } = require("../middlewares/auth");

router.post("/", validateToken, createReaksi);
router.get("/", lookReaksi);

module.exports = router;
