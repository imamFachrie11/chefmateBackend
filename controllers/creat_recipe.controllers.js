// controllers/create_recipe.js
const { Recipe } = require("../models/recipe");

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
    const recipes = await Recipe.find().limit(10);
    res.json(recipes);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error fetching recipes" });
  }
};

module.exports = { createRecipe, getRecipes };
