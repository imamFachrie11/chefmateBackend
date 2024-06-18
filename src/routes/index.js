const path = require("path");

require("dotenv").config({ path: path.join(__dirname,"./env") });

const express = require("express");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.listen(process.env.SERVER_PORT || 3000, () => {
    console.log("Server Running");
});