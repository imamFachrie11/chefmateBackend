"use strict";

const {
user,
recipe,
jenis_makanan,
bahan,
langkah,
komentar,
reaksi,
favorite,
cooksnap,
} = require("../../models");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  /**
   * @param {import('sequelize').QueryInterface} queryInterface
   * @param {import('sequelize').Sequelize} _Sequelize
   */
  async up(queryInterface, _Sequelize) {
    await user.destroy({ truncate: true });
    await recipe.destroy({ truncate: true });
    await jenis_makanan.destroy({ truncate: true });
    await bahan.destroy({ truncate: true });
    await langkah.destroy({ truncate: true });
    await komentar.destroy({ truncate: true });
    await reaksi.destroy({ truncate: true });
    await favorite.destroy({ truncate: true });
    await cooksnap.destroy({ truncate: true });

    await queryInterface.bulkInsert("users", [
      {
        id: 1,
        email_user: "beta@example.com",
        nama_user: "test user",
        password_user:
          "$2a$12$.HOb8SlLxGN4usHDihNaQe6IFDodXO09pO6Nfi.M96XzcTJ9F1HDu",
        deskripsi_user: "beta tess massukk mass",
        gambar: "contoh ini adalah gambar profil"
      },
    ]);
    await queryInterface.bulkInsert("recipes", [
      { id: 1, judul: "judul 1", foto_recipe: "foto 1", porsi: 1, durasi: 1},
      { id: 2, judul: "judul 2", foto_recipe: "foto 2", porsi: 2, durasi: 2},
      { id: 3, judul: "judul 3", foto_recipe: "foto 3", porsi: 3, durasi: 3},
      { id: 4, judul: "judul 4", foto_recipe: "foto 4", porsi: 4, durasi: 4},
      { id: 5, judul: "judul 5", foto_recipe: "foto 5", porsi: 5, durasi: 5},
      { id: 6, judul: "judul 6", foto_recipe: "foto 6", porsi: 6, durasi: 6},
      { id: 7, judul: "judul 7", foto_recipe: "foto 7", porsi: 7, durasi: 7},
      { id: 8, judul: "judul 8", foto_recipe: "foto 8", porsi: 8, durasi: 8},
      { id: 9, judul: "judul 9", foto_recipe: "foto 9", porsi: 9, durasi: 9},
      { id: 10, judul: "judul 10", foto_recipe: "fot0 10", porsi: 10, durasi: 10},
      { id: 11, judul: "judul 11", foto_recipe: "foto 11", porsi: 11, durasi: 11},
      { id: 12, judul: "judul 12", foto_recipe: "foto 12", porsi: 12, durasi: 12},
    ]);
    await queryInterface.bulkInsert("jenis_makanans", [
      { id: 1, nama_jenis_makanan: "makanan 1", id_recipe: 1},
      { id: 2, nama_jenis_makanan: "makanan 2", id_recipe: 2},
      { id: 3, nama_jenis_makanan: "makanan 3", id_recipe: 3},
      { id: 4, nama_jenis_makanan: "makanan 4", id_recipe: 4},
      { id: 5, nama_jenis_makanan: "makanan 5", id_recipe: 5},
      { id: 6, nama_jenis_makanan: "makanan 6", id_recipe: 6},
      { id: 7, nama_jenis_makanan: "makanan 7", id_recipe: 7},
    ]);
    await queryInterface.bulkInsert("bahans", [
      { book_id: 1, author_id: 1 },
      { book_id: 1, author_id: 2 },
      { book_id: 1, author_id: 3 },
      { book_id: 2, author_id: 2 },
      { book_id: 2, author_id: 4 },
      { book_id: 3, author_id: 1 },
      { book_id: 3, author_id: 3 },
      { book_id: 4, author_id: 4 },
      { book_id: 5, author_id: 5 },
      { book_id: 6, author_id: 1 },
      { book_id: 7, author_id: 2 },
      { book_id: 8, author_id: 3 },
      { book_id: 9, author_id: 4 },
      { book_id: 10, author_id: 5 },
      { book_id: 11, author_id: 1 },
      { book_id: 12, author_id: 2 },
      { book_id: 13, author_id: 3 },
      { book_id: 14, author_id: 4 },
      { book_id: 15, author_id: 5 },
      { book_id: 16, author_id: 1 },
      { book_id: 17, author_id: 2 },
      { book_id: 18, author_id: 3 },
      { book_id: 19, author_id: 4 },
      { book_id: 20, author_id: 5 },
      { book_id: 21, author_id: 1 },
      { book_id: 22, author_id: 2 },
      { book_id: 23, author_id: 3 },
      { book_id: 24, author_id: 4 },
      { book_id: 25, author_id: 5 },
      { book_id: 26, author_id: 1 },
      { book_id: 27, author_id: 2 },
      { book_id: 28, author_id: 3 },
      { book_id: 29, author_id: 4 },
      { book_id: 30, author_id: 5 },
    ]);
    await queryInterface.bulkInsert("orders", [
      {
        id: 1,
        customer_id: 1,
        order_date: new Date(),
        shipping_address: "Jember, Jawa Timur, Indonesia",
        total: 50000,
      },
      {
        id: 2,
        customer_id: 1,
        order_date: new Date(),
        shipping_address: "Jember, Jawa Timur, Indonesia",
        total: 250000,
      },
    ]);
    await queryInterface.bulkInsert("order_details", [
      { order_id: 1, book_id: 1, quantity: 1, price: 10000, subtotal: 10000 },
      { order_id: 1, book_id: 2, quantity: 2, price: 20000, subtotal: 40000 },
      { order_id: 2, book_id: 3, quantity: 3, price: 30000, subtotal: 90000 },
      { order_id: 2, book_id: 4, quantity: 4, price: 40000, subtotal: 160000 },
    ]);
  },
  /**
   * @param {import('sequelize').QueryInterface} _queryInterface
   * @param {import('sequelize').Sequelize} _Sequelize
   */
  async down(_queryInterface, _Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};