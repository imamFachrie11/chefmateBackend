'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class jenis_makanan extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      jenis_makanan.belongsTo (models.recipe, {
        foreignKey: "id_recipe",
        as: "recipe"
      })
    }
  }
  jenis_makanan.init({
    nama_jenis_makanan: DataTypes.STRING,
    id_recipe: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'jenis_makanan',
    underscored: true,
  });
  return jenis_makanan;
};