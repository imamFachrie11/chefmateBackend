const path = require("path");
require("dotenv").config({ path: path.join(__dirname, "../.env") });
const express = require("express");

const app = express();

const loginRouter = require("./routes/auth.route");
const recipeRouter = require("./routes/recipe.route");
const reaksiRouter = require("./routes/reaksi.route");
const cooksnapRouter = require("./routes/cooksnap.route");
const favoriteRouter = require("./routes/favorite.route");
const komentarRouter = require("./routes/komentar.route");
const langkahRouter = require("./routes/langkah.route");
const bahanRouter = require("./routes/bahan.route");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/auth", loginRouter);
app.use("/recipe", recipeRouter);
app.use("/reaksi", reaksiRouter);
app.use("/cooksnap", cooksnapRouter);
app.use("/favorite", favoriteRouter);
app.use("/komentar", komentarRouter);
app.use("/langkah", langkahRouter);
app.use("/bahan", bahanRouter);

app.listen(process.env.SERVER_PORT || 3000, () => {
  console.log("Server Running");
});
