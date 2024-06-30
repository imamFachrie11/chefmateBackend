"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      user.hasMany(models.recipe, {
        foreignKey: "id_user",
        as: "recipes",
      });
      user.belongsTo(models.cooksnap, {
        foreignKey: "id_user",
        as: "cooksnaps",
      });
      user.belongsTo(models.komentar, {
        foreignKey: "id_user",
        as: "komentars",
      });
      user.belongsTo(models.reaksi, {
        foreignKey: "id_user",
        as: "reaksis",
      });
      user.hasMany(models.favorite, {
        foreignKey: "id_user",
        as: "favorites",
      });
    }
  }
  user.init(
    {
      name_user: DataTypes.STRING,
      email_user: DataTypes.STRING,
      password_user: DataTypes.STRING,
      deskripsi_user: DataTypes.TEXT,
      gambar: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "user",
      underscored: true,
    }
  );
  return user;
};
