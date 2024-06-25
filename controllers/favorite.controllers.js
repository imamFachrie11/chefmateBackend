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


//mengambil favorite berdasarkan ID dan ID resep
const getFavoriteByIdAndRecipeId = async (req, res) => {
    const { id, recipeId } = req.params;
  
    try {
      const favorite = await Favorite.findByPk(id, {
        include: [{
          model: Recipe,
          as: 'recipes',
          where: { id: recipeId },
        }],
      });
  
      if (!favorite) {
        return res.status(404).json({ message: 'Favorite not found' });
      }
  
      res.status(200).json(favorite);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

  // Controller untuk menghapus favorite berdasarkan ID
const deleteFavorite = async (req, res) => {
    const { id } = req.params;
  
    try {
      const favorite = await Favorite.findByPk(id);
  
      if (!favorite) {
        return res.status(404).json({ message: 'Favorite not found' });
      }
  
      await favorite.destroy();
  
      res.status(200).json({ message: 'Favorite deleted successfully' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  
  

module.exports = {
  addFavorite,
  getFavoriteByIdAndRecipeId,
  deleteFavorite,
};
