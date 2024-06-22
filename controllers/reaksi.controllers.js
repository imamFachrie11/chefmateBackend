const { reaksi: reaksiModel, recipe: recipeModel } = require("../models");

const index = async (req, res, next) => {
  const { id_reaksi } = req.params;

  const reaksi = await reaksiModel.findAll({
    where: id_reaksi ? { id: id_reaksi } : {},
    attributes: [
      "id",
      "nama_reaksi",
      "id_user",
      "id_recipe",
      [
        reaksiModel.sequelize.literal(
          `(SELECT name_user FROM users AS u WHERE u.id = reaksi.id_user )`
        ),
        "name_user",
      ],
    ],
  });

  return res.send({
    message: "success",
    data: reaksi,
  });
};

const create = async (req, res, next) => {
  const { id_recipe } = req.params;
  const { nama_reaksi } = req.body;
  const userId = req.user.id;

  const existingRecipe = await recipeModel.findByPk(id_recipe);
  if (!existingRecipe) {
    return res.status(404).json({ message: "recipe not found" });
  }

  await reaksiModel
    .create({
      nama_reaksi: nama_reaksi,
      id_user: userId,
      id_recipe: id_recipe,
    })
    .then((dataResponse) => {
      return res.status(201).send({
        message: "reaksi berhasil di tambahkan",
        data: dataResponse,
      });
    });
};

const update = async (req, res, next) => {
  const { id_reaksi } = req.params;
  const userId = req.user.id;
  console.log(userId);

  const { nama_reaksi } = req.body;

  const existingReaksi = await reaksiModel.findByPk(id_reaksi);
  if (!existingReaksi) {
    return res.status(404).json({ message: "Reaksi not found" });
  }

  if (existingReaksi.id_user != userId) {
    return res.status(403).json({
      message: "Forbidden: you do not have prermission to update this reaksi",
    });
  }

  const updatedReaksi = await existingReaksi.update({
    nama_reaksi,
  });

  return res.send({
    message: "Data has been updated",
    data: updatedReaksi,
  });
};

module.exports = {
  index,
  create,
  update,
};
