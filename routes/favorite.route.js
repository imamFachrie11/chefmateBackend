const express = require('express');

const router = express.Router();

const { favorite } = require("../controllers/favorite.controllers")

router.get("/", favorite)

module.exports = router;