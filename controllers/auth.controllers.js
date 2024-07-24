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
    return res.status(400).json({
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

// Menambahkan user dengan email sadam@gmail.com dan password sadam untuk testing
const addTestUser = async () => {
  const testEmail = "sadam@gmail.com";
  const testPassword = "sadam";

  const emailCheck = await userModels.findOne({
    where: { email_user: testEmail },
    attributes: ["email_user"],
  });

  if (!emailCheck) {
    const passwordHash = await bcrypt.hash(testPassword, 10);
    await userModels.create({
      name_user: "Sadam",
      email_user: testEmail,
      password_user: passwordHash,
    });
    console.log("Test user added: sadam@gmail.com / sadam");
  } else {
    console.log("Test user already exists.");
  }
};

addTestUser();

module.exports = {
  login,
  register,
};
