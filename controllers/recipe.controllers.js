const { recipe: recipeModel } = require("../models");

const index = async (req, res, next) => {
  const { id_recipe } = req.query;

  const recipe = await recipeModel.findAll({
    where: id_recipe ? { id: id_recipe } : {},
    attributes: [
      "id",
      "judul",
      "foto_recipe",
      "porsi",
      "durasi",
      "id_user",
      "id_favorite",
    ],

    include: [
      {
        association: "jenis_makanans",
        attributes: ["id", "nama_jenis_makanan", "id_recipe"],
      },
      {
        association: "bahans",
        attributes: ["id", "nama_bahan", "id_recipe"],
      },
      {
        association: "langkahs",
        attributes: ["id", "nama_langkah", "id_recipe"],
      },
      {
        association: "komentars",
        attributes: [
          "id",
          "deskripsi",
          "id_user",
          "id_recipe",
          [
            recipeModel.sequelize.literal(
              `(SELECT name_user FROM users AS u WHERE u.id = komentars.id_user )`
            ),
            "name_user",
          ],
          [
            recipeModel.sequelize.literal(
              `(SELECT gambar FROM users AS u WHERE u.id = komentars.id_user )`
            ),
            "foto_user",
          ],
        ],
      },
      {
        association: "cooksnaps",
        attributes: [
          "id",
          "name_cooksnap",
          "gambar_cooksnap",
          "id_user",
          "id_recipe",
          [
            recipeModel.sequelize.literal(
              `(SELECT name_user FROM users AS u WHERE u.id = cooksnaps.id_user )`
            ),
            "name_user",
          ],
          [
            recipeModel.sequelize.literal(
              `(SELECT gambar FROM users AS u WHERE u.id = cooksnaps.id_user )`
            ),
            "foto_user",
          ],
        ],
      },
      {
        association: "reaksis",
        attributes: [
          "id",
          "nama_reaksi",
          "id_user",
          "id_recipe",
          [
            recipeModel.sequelize.literal(
              `(SELECT name_user FROM users AS u WHERE u.id = reaksis.id_user )`
            ),
            "name_user",
          ],
        ],
      },
      {
        association: "users",
        attributes: ["id", "name_user", "gambar", "deskripsi_user"],
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
