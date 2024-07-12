const { cooksnap: cooksnapModel, recipe: recipeModel } = require("../models");

const index = async (req, res, next) => {
  const { id_recipe } = req.params;

  const cooksnap = await cooksnapModel.findAll({
    where: id_recipe ? { id_recipe } : {},
    attributes: [
      "id",
      "name_cooksnap",
      "img",
      "img_url",
      "id_user",
      "id_recipe",
      "created_at",
      [
        cooksnapModel.sequelize.literal(
          `(SELECT name_user FROM users AS u WHERE u.id = cooksnap.id_user )`
        ),
        "name_user",
      ],
      [
        cooksnapModel.sequelize.literal(
          `(SELECT img FROM users AS u WHERE u.id = cooksnap.id_user )`
        ),
        "img_user",
      ],
      [
        cooksnapModel.sequelize.literal(
          `(SELECT img_url FROM users AS u WHERE u.id = cooksnap.id_user )`
        ),
        "img_user_url",
      ],
    ],
  });

  return res.send({
    message: "success",
    data: cooksnap,
  });
};

const create = async (req, res, next) => {
  const { id_recipe } = req.params;
  const { nama_cooksnap, gambar_cooksnap } = req.body;
  const userId = req.user.id;

  const existingRecipe = await recipeModel.findByPk(id_recipe);
  if (!existingRecipe) {
    return res.status(404).json({ message: "recipe not found" });
  }

  await cooksnapModel
    .create({
      gambar_cooksnap: gambar_cooksnap,
      name_cooksnap: nama_cooksnap,
      id_user: userId,
      id_recipe: id_recipe,
    })
    .then((dataResponse) => {
      return res.status(201).send({
        message: "cooksnap berhasil di tambahkan",
        data: dataResponse,
      });
    });
};

const update = async (req, res, next) => {
  const { id_cooksnap } = req.params;
  const userId = req.user.id;
  console.log(userId);

  const { nama_cooksnap, gambar_cooksnap } = req.body;

  const existingCooksnap = await cooksnapModel.findByPk(id_cooksnap);
  if (!existingCooksnap) {
    return res.status(404).json({ message: "Cooksnap not found" });
  }

  if (existingCooksnap.id_user != userId) {
    return res.status(403).json({
      message: "Forbidden: you do not have prermission to update this cooksnap",
    });
  }

  const updatedCooksnap = await existingCooksnap.update({
    name_cooksnap: nama_cooksnap,
    gambar_cooksnap,
  });

  return res.send({
    message: "Data has been updated",
    data: updatedCooksnap,
  });
};

const deleteCooksnap = async (req, res, next) => {
  const { id_cooksnap } = req.params;
  const userId = req.user.id;
  console.log(userId);

  const existingCooksnap = await cooksnapModel.findByPk(id_cooksnap);
  if (!existingCooksnap) {
    return res.status(404).json({ message: "Cooksnap not found" });
  }

  if (existingCooksnap.id_user != userId) {
    return res.status(403).json({
      message: "Forbidden: you do not have prermission to delete this cooksnap",
    });
  }

  await existingCooksnap.destroy();

  return res.send({
    message: "Data has been delete",
    data: null,
  });
};

module.exports = {
  index,
  create,
  update,
  deleteCooksnap,
};
