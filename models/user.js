'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      user.belongsToMany(models.recipe, {
        foreignKey: "id_recipe",
        as: "recipes"
      });
      user.hasMany(models.cooksnap,{
        foreignKey: "id_cooksnap",
        as: "cooksnap"
      })
      user.belongsToMany(models.komentar, {
        foreignKey: "id_komentar",
        as: "komentar"
      });
      user.hasMany(models.reaksi, {
        foreignKey: "id_reaksi",
        as: "reaksi"
      });
      user.belongsToMany(models.favorite, {
        foreignKey: "id_favorite",
        as: "favorite"
      })
    }
  }
  user.init({
    name_user: DataTypes.STRING,
    email_user: DataTypes.STRING,
    password_user: DataTypes.STRING,
    deskripsi_user: DataTypes.TEXT,
    gambar: DataTypes.STRING  
  }, {
    sequelize,
    modelName: 'user',
    underscored: true,
  });
  return user;
};