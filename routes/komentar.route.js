const express = require("express");

const router = express.Router();

const { createKomentar, deleteKomentar,getKomentar } = require("../controllers/komentar.controller");
const { komentarCreatevalidation } = require("../middlewares/komentar.middleware");

router.post("/create", komentarCreatevalidation, createKomentar);
router.delete("/delete", deleteKomentar);
router.get("/", getKomentar);

module.exports = router;
