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
        email_user: "sadam@example.com",
        name_user: "sadam",
        password_user:
          "$2a$12$X5.8wO1LDwL3kFkuywO0x.S5F/BEPe1OKapLY5NtEH0J1RfmAMXJG",
        deskripsi_user: "beta tess massukk mass",
        gambar: "gambar/user.jpg",
      },
    ]);

    await queryInterface.bulkInsert("recipes", [
      {
        id: 1,
        judul: "Siyao Kai / Ayam Kecap ala Hongkong",
        foto_recipe: "ayamhongkong.jpg",
        porsi: 2,
        durasi: 30,
      },
      { id: 2, judul: "judul 2", foto_recipe: "foto 2", porsi: 2, durasi: 2 },
    ]);
    await queryInterface.bulkInsert("jenis_makanans", [
      { id: 1, nama_jenis_makanan: "#godainramsay_ayamstrong", id_recipe: 1 },
      { id: 2, nama_jenis_makanan: "#godapaders_2024", id_recipe: 1 },
    ]);
    await queryInterface.bulkInsert("bahans", [
      { id: 1, nama_bahan: "2 potong paha ayam", id_recipe: 1 },
      { id: 2, nama_bahan: "4 siung bawang merah", id_recipe: 1 },
      { id: 3, nama_bahan: "4 siung bawang putih", id_recipe: 1 },
      { id: 4, nama_bahan: "1 jempol jahe", id_recipe: 1 },
      { id: 5, nama_bahan: "2 batang daun bawang", id_recipe: 1 },
    ]);
    await queryInterface.bulkInsert("langkahs", [
      {
        id: 1,
        nama_langkah: "Aduk semua bahan saus jadi satu sampai larut.",
        id_recipe: 1,
      },
      {
        id: 2,
        nama_langkah:
          "Iris tipis bawang putih, bawang merah dan jahe. Untuk daun bawang potong kasar saja.",
        id_recipe: 1,
      },
      {
        id: 3,
        nama_langkah:
          "Letakkan ayam yang sudah di cuci bersih kedalam wajan. Taburi diatasnya dengan bawang putih, bawang merah dan daun bawang.",
        id_recipe: 1,
      },
      {
        id: 4,
        nama_langkah:
          "Tuang larutan saus merata diatas ayam. Nyalakan api sedang cenderung kecil. Tutup wajannya.",
        id_recipe: 1,
      },
      {
        id: 5,
        nama_langkah:
          "Masak sambil dibolak balik agar bumbu meresap dan warnanya cantik. Sampai sausnya menyusut.",
        id_recipe: 5,
      },
    ]);
    // await queryInterface.bulkInsert("komentars", [
    //   { id: 1, deskripsi: "deskripsi 1", id_user: 1, id_recipe: 1 },
    //   { id: 1, deskripsi: "deskripsi 2", id_user: 2, id_recipe: 2 },
    //   { id: 1, deskripsi: "deskripsi 3", id_user: 3, id_recipe: 3 },
    //   { id: 1, deskripsi: "deskripsi 4", id_user: 4, id_recipe: 4 },
    //   { id: 1, deskripsi: "deskripsi 5", id_user: 5, id_recipe: 5 },
    // ]);
    // await queryInterface.bulkInsert("reaksis", [
    //   { id: 1, nama_reaksi: "nama 1", id_user: 1, id_recipe: 1 },
    //   { id: 2, nama_reaksi: "nama 2", id_user: 2, id_recipe: 2 },
    //   { id: 3, nama_reaksi: "nama 3", id_user: 3, id_recipe: 3 },
    //   { id: 4, nama_reaksi: "nama 4", id_user: 4, id_recipe: 4 },
    //   { id: 5, nama_reaksi: "nama 5", id_user: 5, id_recipe: 5 },
    // ]);
    // await queryInterface.bulkInsert("favorites", [
    //   { id: 1, id_user: 1 },
    //   { id: 2, id_user: 2 },
    //   { id: 3, id_user: 3 },
    //   { id: 4, id_user: 4 },
    //   { id: 5, id_user: 5 },
    // ]);
    // await cooksnap.bulkInsert("cooksnaps", [
    //   {
    //     id: 1,
    //     nama_cooksnap: "nama 1",
    //     gambar_cooksnap: "gambar_cooksnap_1",
    //     id_user: 1,
    //     id_recipe: 1,
    //   },
    //   {
    //     id: 2,
    //     nama_cooksnap: "nama 2",
    //     gambar_cooksnap: "gambar_cooksnap_2",
    //     id_user: 2,
    //     id_recipe: 2,
    //   },
    //   {
    //     id: 3,
    //     nama_cooksnap: "nama 3",
    //     gambar_cooksnap: "gambar_cooksnap_3",
    //     id_user: 3,
    //     id_recipe: 3,
    //   },
    //   {
    //     id: 4,
    //     nama_cooksnap: "nama 4",
    //     gambar_cooksnap: "gambar_cooksnap_4",
    //     id_user: 4,
    //     id_recipe: 4,
    //   },
    //   {
    //     id: 5,
    //     nama_cooksnap: "nama 5",
    //     gambar_cooksnap: "gambar_cooksnap_5",
    //     id_user: 5,
    //     id_recipe: 5,
    //   },
    // ]);
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
