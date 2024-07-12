const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const { user: userModels } = require("../models");

const register = async (req, res, next) => {
  const { name, email, password } = req.body;

  const emailCheck = await userModels.findOne({
    where: { email_user: email },
    attributes: ["email_user"],
  });
  if (emailCheck) {
    return res.status(400).send({
      message: "Email already registered",
      data: null,
    });
  }

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
  const { email, password } = req.body;

  const user = await userModels.findOne({
    where: { email_user: email },
    attributes: [
      "id",
      "name_user",
      "email_user",
      "password_user",
      "description_user",
    ],
  });

  if (!user) {
    return res.status(404).send({ message: "nama/password salah" });
  }

  const isValid = await bcrypt.compare(password, user.password_user);
  if (!isValid) {
    return res.status(404).send({ message: "nama/password salah" });
  }

  const data = {
    id: user.id,
    email: user.email,
  };

  const token = jwt.sign(data, process.env.JWT_SECRET);

  return res.send({
    message: "login berhasil",
    data: { token }, // token : token
  });
};

module.exports = {
  login,
  register,
};
