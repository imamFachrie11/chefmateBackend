'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class reaksi extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      reaksi.belongsTo (models.recipe, {
        foreignKey: "id_recipe",
        as: "recipe"
      })
    }
  }
  reaksi.init({
    nama_reaksi: DataTypes.STRING,
    id_user: DataTypes.INTEGER,
    id_recipe: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'reaksi',
    underscored: true,
  });
  return reaksi;
};