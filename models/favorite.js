"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class favorite extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // favorite.belongsToMany(models.user, {
      //   through: models.User,
      //   foreignKey: "id_favorite",
      //   otherKey: "id_user",
      //   as: "users",
      // });
      favorite.hasMany(models.recipe, {
        foreignKey: "id_recipe",
        as: "recipes",
      });
    }
  }
  favorite.init(
    {
      id_user: DataTypes.STRING,
      id_recipe: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "favorite",
      underscored: true,
    }
  );
  return favorite;
};
