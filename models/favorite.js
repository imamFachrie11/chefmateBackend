'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class favorite extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      favorite.hasMany (models.user, {
        foreignKey: "id_user",
        as: "users"
      });
      favorite.belongsTo (models.recipe, {
        foreignKey: "id_recipe",
        as: "recipes"
      })
    }
  }
  favorite.init({
    id_user: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'favorite',
    underscored: true,
  });
  return favorite;
};