const { favorite: Favorite, recipe: Recipe } = require("../models");

//  menambahkan favorite baru
const addFavorite = async (req, res) => {
  const { userId, recipeId } = req.body;

  try {
    const favorite = await Favorite.create({
      id_user: userId,
    });

    // Menyambungkan favorite dengan recipe
    await favorite.addRecipe(recipeId);

    res.status(201).json({ message: 'Favorite added successfully', favorite });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  addFavorite,
};
