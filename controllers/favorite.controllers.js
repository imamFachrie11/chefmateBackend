const { favorite: Favorite, recipe: Recipe } = require("../models");

//  menambahkan favorite baru
const addFavorite = async (req, res) => {
  const { id_recipe } = req.params;
  const userId = req.user.id;
  try {

    const getFavorite = await Favorite.findAll({
      where: {  id_user: userId,
        id_recipe : id_recipe } 
    })
    console.log(getFavorite);
    if (getFavorite.length <=0){
      const favorite = await Favorite.create({
        id_user: userId,
        id_recipe: id_recipe,
      });
    }

    // Menyambungkan favorite dengan recipe
    // await favorite.addRecipe(id_recipe);

    res.status(201).json({ message: "Favorite added successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
    console.log(error)
  }
};

// mengambil favorite berdasarkan ID dan ID resep
const getFavoriteByIdAndRecipeId = async (req, res) => {
  const userId = req.user.id;

  try {
    const favorite = await Favorite.findAll({
      where: { id_user: userId },
      attributes: [
        "id",
        "id_user",
        "id_recipe",
        [
          Favorite.sequelize.literal(
            `(SELECT judul FROM recipes AS r WHERE r.id = favorite.id_recipe )`
          ),
          "judul",
        ],
        [
          Favorite.sequelize.literal(
            `(SELECT foto_recipe_url FROM recipes AS r WHERE r.id = favorite.id_recipe )`
          ),
          "foto_recipe_url",
        ],
        [
          Favorite.sequelize.literal(
            `(SELECT durasi FROM recipes AS r WHERE r.id = favorite.id_recipe )`
          ),
          "durasi",
        ],
      ],
    });

    if (!favorite) {
      return res.status(404).json({ message: "Favorite not found" });
    }

    res.status(200).json({ message: "success", data: favorite });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// menghapus favorite berdasarkan ID
const deleteFavorite = async (req, res) => {
  const { id } = req.params;

  try {
    const favorite = await Favorite.findOne({ where: { id } });

    if (!favorite) {
      return res.status(404).json({ message: "Favorite not found" });
    }

    await favorite.destroy();

    res.status(200).json({ message: "Favorite deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  addFavorite,
  getFavoriteByIdAndRecipeId,
  deleteFavorite,
};
