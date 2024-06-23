const express = require("express");

const router = express.Router();

const { createKomentar } = require("../controllers/komentar.controller");
const { komentarCreatevalidation } = require("../middlewares/komentar.middleware");

router.post("/create", komentarCreatevalidation, createKomentar);

module.exports = router;
