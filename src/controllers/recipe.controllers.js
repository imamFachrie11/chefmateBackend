const { Association } = require("sequelize");
const { recipe: recipeModel } = require("../models");

const index = async (req, res, next) => {
  const { id_recipe } = req.query;

  const recipe = await recipeModel.findAll({
    where: id_recipe ? { id: id_recipe } : {},
    include: [
      {
        association: "jenis_makanans",
        attributes: ["id", "nama_jenis_makanan"],
      },
      {
        association: "bahans",
        attributes: ["id", "nama_bahan"],
      },
      {
        association: "langkahs",
      },
    ],
  });

  return res.send({
    message: "success",
    data: recipe,
  });
};

module.exports = {
  index,
};
