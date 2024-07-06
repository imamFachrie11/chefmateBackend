const { langkah: langkahModel, recipe: recipeModel } = require("../models");

const index = async (req, res, next) => {
  const { id_recipe } = req.params;

  const langkah = await langkahModel.findAll({
    where: id_recipe ? { id_recipe } : {},
    attributes: ["id", "nama_langkah", "id_recipe"],
  });

  return res.send({
    message: "success",
    data: langkah,
  });
};

const create = async (req, res, next) => {
  const { id_recipe } = req.params;
  const { nama_langkah } = req.body;
  //   const userId = req.user.id;

  const existingRecipe = await recipeModel.findByPk(id_recipe);
  if (!existingRecipe) {
    return res.status(404).json({ message: "recipe not found" });
  }

  await langkahModel
    .create({
      nama_langkah,
      id_recipe: id_recipe,
    })
    .then((dataResponse) => {
      return res.status(201).send({
        message: "langkah berhasil di tambahkan",
        data: dataResponse,
      });
    });
};

const update = async (req, res, next) => {
  const { id_langkah } = req.params;
  const userId = req.user.id;

  const { nama_langkah } = req.body;

  const existingLangkah = await langkahModel.findByPk(id_langkah);
  if (!existingLangkah) {
    return res.status(404).json({ message: "Langkah not found" });
  }

  const existingRecipe = await recipeModel.findByPk(existingLangkah.id_recipe);
  if (existingRecipe.id_user != userId) {
    return res.status(404).json({
      message: "Forbidden: you do not have permission to update this langkah",
    });
  }

  const updatedLangkah = await existingLangkah.update({
    nama_langkah,
  });

  return res.send({
    message: "Data has been updated",
    data: updatedLangkah,
  });
};

const deleteLangkah = async (req, res, next) => {
  const { id_langkah } = req.params;
  const userId = req.user.id;

  const existingLangkah = await langkahModel.findByPk(id_langkah);
  if (!existingLangkah) {
    return res.status(404).json({ message: "Langkah not found" });
  }

  const existingRecipe = await recipeModel.findByPk(existingLangkah.id_recipe);
  if (existingRecipe.id_user != userId) {
    return res.status(404).json({
      message: "Forbidden: you do not have prermission to delete this langkah",
    });
  }

  await existingLangkah.destroy();

  return res.send({
    message: "Data has been delete",
    data: null,
  });
};

module.exports = {
  index,
  create,
  update,
  deleteLangkah,
};
