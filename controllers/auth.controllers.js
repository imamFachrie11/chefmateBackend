const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const { user: userModels } = require("../models");

const register = async (req, res, next) => {
  const { name, email, password } = req.body;

  const passwordHash = await bcrypt.hash(password, 10);
  console.log("passwordHash", passwordHash);
  await userModels
    .create({
      name_user: name,
      email_user: email,
      password_user: passwordHash,
    })
    .then((user) => {
      if (!user) {
        return res.status(500).send({
          message: "Failed to register user",
          data: null,
        });
      }

      return res.status(201).send({
        message: "User successfully registered",
        data: null,
      });
    })
    .catch((err) => {
      next(err);
    });
};

const login = async (req, res, next) => {
  res.send({
    message: "ini login",
  });
};

module.exports = {
  login,
  register,
};
