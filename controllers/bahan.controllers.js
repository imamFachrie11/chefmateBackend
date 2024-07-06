const { bahan: bahanModel } = require("../models");

const index = async (req, res, next) => {
  const { id_recipe } = req.params;

  const bahan = await bahanModel.findAll({
    where: id_recipe ? { id_recipe } : {},
    attributes: ["id", "nama_bahan", "id_recipe"],
  });

  return res.send({
    message: "success",
    data: bahan,
  });
};

const create = async (req, res, next) => {
  const { id_recipe } = req.params;
  const { nama_bahan } = req.body;
  //   const userId = req.user.id;

  const existingRecipe = await recipeModel.findByPk(id_recipe);
  if (!existingRecipe) {
    return res.status(404).json({ message: "recipe not found" });
  }

  await bahanModel
    .create({
      nama_bahan,
      id_recipe: id_recipe,
    })
    .then((dataResponse) => {
      return res.status(201).send({
        message: "bahan berhasil di tambahkan",
        data: dataResponse,
      });
    });
};

const update = async (req, res, next) => {
  const { id_bahan } = req.params;
  const userId = req.user.id;

  const { nama_bahan } = req.body;

  const existingBahan = await bahanModel.findByPk(id_bahan);
  if (!existingBahan) {
    return res.status(404).json({ message: "Bahan not found" });
  }

  const existingRecipe = await recipeModel.findByPk(existingBahan.id_recipe);
  if (existingBahan.id_user != userId) {
    return res.status(403).json({
      message: "Forbidden: you do not have permission to update this bahan",
    });
  }

  const updatedBahan = await existingBahan.update({
    nama_bahan,
  });

  return res.send({
    message: "Data has been updated",
    data: updatedBahan,
  });
};

const deleteBahan = async (req, res, next) => {
  const { id_bahan } = req.params;
  const userId = req.user.id;

  const existingBahan = await BahanModel.findByPk(id_bahan);
  if (!existingBahan) {
    return res.status(404).json({ message: "Bahan not found" });
  }

  const existingRecipe = await recipeModel.findByPk(existingBahan.id_recipe);
  if (existingRecipe.id_user != userId) {
    return res.status(403).json({
      message: "Forbidden: you do not have prermission to delete this bahan",
    });
  }

  await existingBahan.destroy();

  return res.send({
    message: "Data has been delete",
    data: null,
  });
};

module.exports = {
  index,
  create,
  update,
  deleteBahan,
};
