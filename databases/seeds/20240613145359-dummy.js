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
    // Menonaktifkan pemeriksaan kunci asing
    await queryInterface.sequelize.query('SET FOREIGN_KEY_CHECKS = 0;');

    try {
      // Menghapus semua data
      await queryInterface.bulkDelete('cooksnaps', null, {});
      await queryInterface.bulkDelete('favorites', null, {});
      await queryInterface.bulkDelete('reaksis', null, {});
      await queryInterface.bulkDelete('komentars', null, {});
      await queryInterface.bulkDelete('langkahs', null, {});
      await queryInterface.bulkDelete('bahans', null, {});
      await queryInterface.bulkDelete('jenis_makanans', null, {});
      await queryInterface.bulkDelete('recipes', null, {});
      await queryInterface.bulkDelete('users', null, {});

      // Menambahkan data dummy
      await queryInterface.bulkInsert("users", [
        {
          id: 1,
          email_user: "sadam@gmail.com",
          name_user: "sadam",
          password_user:
            "$2a$12$X5.8wO1LDwL3kFkuywO0x.S5F/BEPe1OKapLY5NtEH0J1RfmAMXJG", //sadam
          deskripsi_user: "lohe kok bisa begini terus pada kemana ini?",
          gambar: "gambar/user.jpg",
        },
        {
          id: 2,
          email_user: "yo@gmail.com",
          name_user: "yo",
          password_user:
            "$2a$12$GvcOCCiKubV3U58uljXsW.WEQ0QKABC6OPZAFUyveuQJezgOR51bS", //yo
          deskripsi_user:
            "awalnya saya coba ternyata gampang jadinya saya buat deh resepnya",
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
          id_user: 2,
          id_favorite: 1,
        },
        { id: 2, judul: "judul 2", foto_recipe: "foto 2", porsi: 2, durasi: 2 },
      ]);
        // Masukkan data lainnya jika diperlukan

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
      await queryInterface.bulkInsert("komentars", [
        { id: 1, deskripsi: "keren abis", id_user: 1, id_recipe: 1 },
      ]);
      await queryInterface.bulkInsert("reaksis", [
        { id: 1, nama_reaksi: "like", id_user: 1, id_recipe: 1 },
      ]);
      await queryInterface.bulkInsert("favorites", [{ id: 1, id_user: 1 }]);
      await queryInterface.bulkInsert("cooksnaps", [
        {
          id: 1,
          name_cooksnap: "enak banget",
          gambar_cooksnap: "gambar_cooksnap_1",
          id_user: 1,
          id_recipe: 1,
        },
      ]);

      await queryInterface.bulkInsert("komentars", [
        { id: 1, deskripsi: "deskripsi 1", id_user: 1, id_recipe: 1},
        // Masukkan data lainnya jika diperlukan
      ]);

      await queryInterface.bulkInsert("reaksis", [
        { id: 1, nama_reaksi: "nama 1", id_user: 1, id_recipe: 1},
        // Masukkan data lainnya jika diperlukan
      ]);

      await queryInterface.bulkInsert("favorites", [
        { id: 1, id_user: 1},
        // Masukkan data lainnya jika diperlukan
      ]);

      await queryInterface.bulkInsert("cooksnaps", [
        { id: 1, name_cooksnap:"nama 1", gambar_cooksnap:"gambar_cooksnap_1", id_user: 1, id_recipe: 1},
        // Masukkan data lainnya jika diperlukan
      ]);

      console.log('Seeding berhasil.');

    } catch (error) {
      console.error('Error saat melakukan seeding:', error);
    } finally {
      // Mengaktifkan kembali pemeriksaan kunci asing
      await queryInterface.sequelize.query('SET FOREIGN_KEY_CHECKS = 1;');
    }
  },

  /**
   * @param {import('sequelize').QueryInterface} _queryInterface
   * @param {import('sequelize').Sequelize} _Sequelize
   */
  async down(_queryInterface, _Sequelize) {
    /**
     * Menambahkan perintah untuk menghapus data yang telah dimasukkan
     * Misalnya:
     * await queryInterface.bulkDelete('cooksnaps', null, {});
     * await queryInterface.bulkDelete('favorites', null, {});
     * await queryInterface.bulkDelete('reaksis', null, {});
     * await queryInterface.bulkDelete('komentars', null, {});
     * await queryInterface.bulkDelete('langkahs', null, {});
     * await queryInterface.bulkDelete('bahans', null, {});
     * await queryInterface.bulkDelete('jenis_makanans', null, {});
     * await queryInterface.bulkDelete('recipes', null, {});
     * await queryInterface.bulkDelete('users', null, {});
     */
  },
};
