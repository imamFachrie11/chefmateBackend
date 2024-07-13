const path = require("path");
const crypto = require("crypto");

const {
  recipe: recipeModel,
  bahan: bahanModel,
  cooksnap: cookSnapModel,
  favorite: favoriteModel,
  jenis_makanan: jenis_makanansModel,
  komentar: komentarModel,
  langkah: langkahModel,
  reaksi: reaksiModel,
} = require("../models");
// const { bahan: bahanModel  } = require("../models");
// const { cooksnap : cookSnapModel } = require("../models");
// const { favorite : favoriteModel } = require("../models");

const createRecipe = async (req, res) => {
  try {
    const { judul, porsi, durasi, deskripsi_resep } = req.body;
    const userId = req.user.id;

    const foto_recipe = req.files.foto_recipe;
    console.log(foto_recipe, "files");

    if (!foto_recipe) {
      return res.status(404).json({ message: "file foto tidak boleh kosong" });
    }

    const ext = path.extname(foto_recipe.name);
    console.log(ext, "ext");

    const fileName = crypto.randomUUID() + ext;
    console.log(fileName, "filename");

    const linkPhoto = `/photos/${fileName}`;
    console.log(linkPhoto, "link");

    const allowedType = [".png", ".jpg", ".jpeg"];

    //filter file type
    if (!allowedType.includes(ext.toLowerCase())) {
      return res.status(422).json({ msg: "type file not allowed" });
    }

    foto_recipe.mv(`./public/photos/${fileName}`, async (err) => {
      if (err) return res.status(500).json({ msg: err.message });
      try {
        await recipeModel.create({
          judul,
          porsi,
          durasi,
          deskripsi_resep,
          foto_recipe: fileName,
          foto_recipe_url: linkPhoto,
          id_user : userId
        });
        return res.status(201).json({ msg: "Recipe created successfully" });
      } catch (error) {
        return res.status(500).json({ msg: error.message });
      }
    });
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
    res
      .status(500)
      .json({ message: "Error fetching data", error: error.message });
  }
};

const index = async (req, res, next) => {
  console.log(req.user);
  const { id_recipe } = req.params;

  const recipe = await recipeModel.findAll({
    where: id_recipe ? { id: id_recipe } : {},
    attributes: [
      "id",
      "judul",
      "foto_recipe",
      "foto_recipe_url",
      "porsi",
      "durasi",
      "deskripsi_resep",
      "created_at",
      "id_user",
      "id_kategori",
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
        attributes: ["id", "nama_langkah", "img", "img_url"],
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
              `(SELECT img FROM users AS u WHERE u.id = komentars.id_user )`
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
          "img",
          "img_url",
          [
            recipeModel.sequelize.literal(
              `(SELECT name_user FROM users AS u WHERE u.id = cooksnaps.id_user )`
            ),
            "name_user",
          ],
          [
            recipeModel.sequelize.literal(
              `(SELECT img FROM users AS u WHERE u.id = cooksnaps.id_user )`
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
        attributes: ["id", "name_user", "description_user", "img", "img_url"],
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

const deleteRecipe = async (req, res) => {
  try {
    const { id_recipe } = req.body;

    await reaksiModel.destroy({
      where: {
        id_recipe: id_recipe,
      },
    });

    await langkahModel.destroy({
      where: {
        id_recipe: id_recipe,
      },
    });

    await komentarModel.destroy({
      where: {
        id_recipe: id_recipe,
      },
    });

    await jenis_makanansModel.destroy({
      where: {
        id_recipe: id_recipe,
      },
    });

    await favoriteModel.destroy({
      where: {
        id_recipe: id_recipe,
      },
    });

    await cookSnapModel.destroy({
      where: {
        id_recipe: id_recipe,
      },
    });

    await bahanModel.destroy({
      where: {
        id_recipe: id_recipe,
      },
    });

    await recipeModel.destroy({
      where: {
        id: id_recipe,
      },
    });

    return res.status(200).send({
      message: "delete recipe sukses",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "internal error", error: error.message });
  }
};


const getRecipesLimit8 = async (req, res) => {
  try {

    const { limit = 1 } = req.params;

    const recipes = await recipeModel.findAll({
      limit: parseInt(limit),
    });
    console.log(recipes);
    
    return res.status(200).send({
      message: "success",
      data: recipes,
    });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "Error fetching data", error: error.message });
  }
};

module.exports = {
  index,
  update,
  createRecipe,
  getRecipes,
  deleteRecipe,
  getRecipesLimit8
};
