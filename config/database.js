const path = require("path");

require("dotenv").config({ path: path.join(__dirname, "../.env") });

module.exports = {
  development: {
    dialect: "mysql",
    host: process.env.DATABASE_HOST,
    port: process.env.DATABASE_PORT,
    username: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
  },
};
