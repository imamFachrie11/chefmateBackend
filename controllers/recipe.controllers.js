const { recipe: recipeModel } = require("../models");

const createRecipe = async (req, res) => {
  try {
    const { judul, porsi, durasi, bahan } = req.body;
    const recipe = new Recipe({ judul, porsi, durasi, bahan });
    await recipe.save();
    res.status(201).json({ message: "Recipe created successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error creating recipe" });
  }
};

const getRecipes = async (req, res) => {
  try {
    const recipes = await recipeModel.findAndCountAll({
      limit: 10,
      offset: 1,
    });
    return res.status(200).json({ recipes });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error fetching recipes" });
  }
};

const index = async (req, res, next) => {
  const { id_recipe } = req.params;

  const recipe = await recipeModel.findAll({
    where: id_recipe ? { id: id_recipe } : {},
    attributes: [
      "id",
      "judul",
      "foto_recipe",
      "porsi",
      "durasi",
      "id_user",
      "id_kategori"
    ],

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
        attributes: ["id", "nama_langkah"],
      },
      {
        association: "komentars",
        attributes: [
          "id",
          "deskripsi",
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

/**
 * @param {import("express").Request} req
 * @param {import("express").Response} res
 * @param {import("express").NextFunction} next
 */
const update = async (req, res, next) => {
  const { id_recipe } = req.params;
  const userId = req.user.id;

  const { judul, foto_recipe, porsi, durasi } = req.body;

  const existingRecipe = await recipeModel.findByPk(id_recipe);
  if (!existingRecipe) {
    return res.status(404).json({ message: "Recipe not found" });
  }

  if (existingRecipe.id_user != userId) {
    return res.status(403).json({
      message: "Forbidden: you do not have prermission to update this recipe",
    });
  }

  const updatedRecipe = await existingRecipe.update({
    judul,
    foto_recipe,
    porsi,
    durasi,
  });

  return res.send({
    message: "Data has been updated",
    data: updatedRecipe,
  });
};

module.exports = {
  index,
  update,
  createRecipe,
  getRecipes,
};
