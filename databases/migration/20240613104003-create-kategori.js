'use strict';

const { fn, Model } = require('sequelize');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('kategoris', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nama_kategori: {
        type: Sequelize.STRING
      },
      nama_foto_kategori: {
        type: Sequelize.STRING
      },
      foto_kategori_url: {
        type: Sequelize.STRING
      },
      created_at: {
        allowNull: false,
        defaultValue:Sequelize.fn("NOW"),
        type: Sequelize.DATE
      },
      updated_at: {
        allowNull: false,
        defaultValue:Sequelize.fn("NOW"),
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('kategoris');
  }
};