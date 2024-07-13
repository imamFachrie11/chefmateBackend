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
  kategoris,
} = require("../../models");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  /**
   * @param {import('sequelize').QueryInterface} queryInterface
   * @param {import('sequelize').Sequelize} _Sequelize
   */
  async up(queryInterface, _Sequelize) {
    // Menonaktifkan pemeriksaan kunci asing
    await queryInterface.sequelize.query("SET FOREIGN_KEY_CHECKS = 0;");

    try {
      // Menghapus semua data
      await queryInterface.bulkDelete("cooksnaps", null, {});
      await queryInterface.bulkDelete("favorites", null, {});
      await queryInterface.bulkDelete("reaksis", null, {});
      await queryInterface.bulkDelete("komentars", null, {});
      await queryInterface.bulkDelete("langkahs", null, {});
      await queryInterface.bulkDelete("bahans", null, {});
      await queryInterface.bulkDelete("jenis_makanans", null, {});
      await queryInterface.bulkDelete("recipes", null, {});
      await queryInterface.bulkDelete("users", null, {});
      await queryInterface.bulkDelete("kategoris", null, {});

      // Menambahkan data dummy
      await queryInterface.bulkInsert("users", [
        {
          id: 1,
          email_user: "sadam@gmail.com",
          name_user: "sadam",
          password_user:
            "$2a$12$X5.8wO1LDwL3kFkuywO0x.S5F/BEPe1OKapLY5NtEH0J1RfmAMXJG", //sadam
          description_user:
            "awalnya saya mencoba coba untuk memasak, lama-lama ketagihan ye kan, karena saya orang nya suka lupa apa yang saya buat jadinya saya coba deh nulis resep saya. semoga menikmati",
          img: "sadam.jpg",
          img_url: "/photos/user/sadam.jpg",
        },
        {
          id: 2,
          email_user: "yo@gmail.com",
          name_user: "yo",
          password_user:
            "$2a$12$GvcOCCiKubV3U58uljXsW.WEQ0QKABC6OPZAFUyveuQJezgOR51bS", //yo
          description_user:
            "awalnya saya coba ternyata gampang jadinya saya buat deh resepnya",
          img: "yo.jpg",
          img_url: "/photos/user/yo.jpg",
        },
        {
          id: 3,
          email_user: "imam@gmail.com",
          name_user: "mas imam",
          password_user:
            "$2a$12$GvcOCCiKubV3U58uljXsW.WEQ0QKABC6OPZAFUyveuQJezgOR51bS", //yo
          description_user:
            "resep ini cocok untuk lidah yang suka dengan yg manis manis seperti hidup saya",
          img: "img/user.jpg",
        },
        {
          id: 4,
          email_user: "gusti@gmail.com",
          name_user: "gusti",
          password_user:
            "$2a$12$GvcOCCiKubV3U58uljXsW.WEQ0QKABC6OPZAFUyveuQJezgOR51bS", //yo
          description_user:
            "ini resep orang tua saya harap dapan membantu para cookers dalam mencari resep pilihan terbaik",
          img: "img/user.jpg",
        },
        {
          id: 5,
          email_user: "ihsan@gmail.com",
          name_user: "ihsan",
          password_user:
            "$2a$12$GvcOCCiKubV3U58uljXsW.WEQ0QKABC6OPZAFUyveuQJezgOR51bS", //yo
          description_user:
            "awalnya saya coba ternyata gampang jadinya saya buat deh resepnya",
          img: "img/user.jpg",
        },
      ]);

      await queryInterface.bulkInsert("recipes", [
        {
          id: 1,
          judul: "Siyao Kai / Ayam Kecap ala Hongkong",
          foto_recipe: "ayamhongkong.jpg",
          foto_recipe_url: "/photos/ayam-hongkong.jpg",
          porsi: 2,
          durasi: "30 menit",
          deskripsi_resep:
            "Saya share ide menu sahur yang masaknya gampang, tapi bikin keluarga semangat makannya.Fyi, saya recook dari canro dan saya hanya bikin 2/3 dari resep asli.",
          id_user: 1,
          id_kategori: 1,
        },
        {
          id: 2,
          judul: "Ayam Krispy Sambel Kacang mete",
          foto_recipe: "ayam-kripsi.jpg",
          foto_recipe_url: "/photos/ayam-kripsi.jpg",
          porsi: 1,
          durasi: "30 menit",
          deskripsi_resep: "saya terinspirasi dari masakan ibu",
          id_user: 2,
          id_kategori: 2,
        },
        {
          id: 3,
          judul: "Ayam Krispy Sambel Kacang mete",
          foto_recipe: "ayam-kripsi.jpg",
          foto_recipe_url: "/photos/udang-tepung.jpg",
          porsi: 1,
          durasi: "30 menit",
          deskripsi_resep:
            "keluarga suka banget sama udang goreng tepung krispi gini.",
          id_user: 1,
          id_kategori: 2,
        },
        // {
        //   id: 3,
        //   judul: "bubur ayam khas solo",
        //   foto_recipe: "bubur ayam khas abang sodikin",
        //   foto_recipe_url: "image_bubur_ayam.jpg",
        //   porsi: 1,
        //   durasi: "2 jam",
        //   id_user: 3,
        //   id_kategori: 3,
        // },
        // {
        //   id: 4,
        //   judul: "pecel lele khas lamongan",
        //   foto_recipe: "pecinta pecel lele khas abang marwan ",
        //   foto_recipe_url: "image_poto_pecel_lele.jpg",
        //   porsi: 1,
        //   durasi: "2 jam",
        //   id_user: 4,
        //   id_kategori: 4,
        // },
        // {
        //   id: 5,
        //   judul: "malbi dari daging sapi",
        //   foto_recipe: "malbi by bunda khairi",
        //   foto_recipe_url: "image_malbi.jpg",
        //   porsi: 1,
        //   durasi: "2 jam",
        //   id_user: 5,
        //   id_kategori: 5,
        // },
      ]);
      // Masukkan data lainnya jika diperlukan

      await queryInterface.bulkInsert("jenis_makanans", [
        { id: 1, nama_jenis_makanan: "#godainramsay_ayamstrong", id_recipe: 1 },
        { id: 2, nama_jenis_makanan: "#godapaders_2024", id_recipe: 5 },
        {
          id: 3,
          nama_jenis_makanan: "#godainabangpake_buburayam andalan",
          id_recipe: 3,
        },
        { id: 4, nama_jenis_makanan: "#favoritorangtua_2024", id_recipe: 2 },
        { id: 5, nama_jenis_makanan: "#resepkhasoppah", id_recipe: 4 },
      ]);

      await queryInterface.bulkInsert("bahans", [
        { nama_bahan: "2 potong paha ayam", id_recipe: 1 },
        { nama_bahan: "4 siung bawang merah", id_recipe: 1 },
        {
          nama_bahan: "4 siung bawang putih",
          id_recipe: 1,
        },
        { nama_bahan: "1 jempol jahe", id_recipe: 1 },
        { nama_bahan: "2 batang daun bawang", id_recipe: 1 },
        { nama_bahan: "Saus", id_recipe: 1 },
        { nama_bahan: "2 sdm kecap manis", id_recipe: 1 },
        { nama_bahan: "2 sdm kecap asin", id_recipe: 1 },
        { nama_bahan: "1 1/3 sdm saus tiram", id_recipe: 1 },
        { nama_bahan: "2/3 sdt kaldu bubuk", id_recipe: 1 },
        { nama_bahan: "1/3 sdt lada bubuk", id_recipe: 1 },
        { nama_bahan: "2/3 sdt gula pasir", id_recipe: 1 },
        { nama_bahan: "1 1/3 sdm minyak wijen", id_recipe: 1 },
        { nama_bahan: "1/3 sdt cuka", id_recipe: 1 },
        { nama_bahan: "50-75 ml air", id_recipe: 1 },
        { nama_bahan: "Sambal", id_recipe: 1 },
        { nama_bahan: "50 ml air", id_recipe: 1 },
        { nama_bahan: "3 buah cabe rawit", id_recipe: 1 },
        { nama_bahan: "1/4 buat tomat", id_recipe: 1 },
        { nama_bahan: "1/2 siung bawang putih", id_recipe: 1 },
        { nama_bahan: "1/2 ruas jari jahe", id_recipe: 1 },
        { nama_bahan: "1.5 sdm saus sambal", id_recipe: 1 },
        { nama_bahan: "1/2 buah jeruk nipis ambil airnya", id_recipe: 1 },
        { nama_bahan: "1 sdt gula pasir", id_recipe: 1 },
        { nama_bahan: "1/4 sdt kaldu jamur", id_recipe: 1 },
        { nama_bahan: "1/4 sdt garam", id_recipe: 1 },
        {
          nama_bahan: "1 ayam paha bawah",
          id_recipe: 2,
        },
        {
          nama_bahan: "1 Tepung sajiku ayam goreng",
          id_recipe: 2,
        },
        { nama_bahan: "Bumbu sambel", id_recipe: 2 },
        { nama_bahan: "5 cabe rawit", id_recipe: 2 },
        { nama_bahan: "5 kacang mete", id_recipe: 2 },
        { nama_bahan: "2 cm jahe, haluskan", id_recipe: 2 },
        { nama_bahan: "3 bawang merah", id_recipe: 2 },
        { nama_bahan: "3 bawang putih", id_recipe: 2 },
        { nama_bahan: "secukupnya Garam", id_recipe: 2 },
        {
          nama_bahan: "secukupnya Lada",
          id_recipe: 2,
        },
        { nama_bahan: "secukupnya Penyedap", id_recipe: 2 },
        { nama_bahan: "Marinasi", id_recipe: 3 },
        { nama_bahan: "1/4 Udang", id_recipe: 3 },
        { nama_bahan: "2 siung Bawang Putih", id_recipe: 3 },
        { nama_bahan: "1 sdt Penyedap Rasa", id_recipe: 3 },
        { nama_bahan: "1/2 sdt Garam", id_recipe: 3 },
        { nama_bahan: "Adonan Tepung Kering", id_recipe: 3 },
        { nama_bahan: "150 gr Tepung Segitiga Biru", id_recipe: 3 },
        { nama_bahan: "2 sdm Tepung Maizena", id_recipe: 3 },
        { nama_bahan: "1 sdt Garam", id_recipe: 3 },
        { nama_bahan: "1 sdt Lada", id_recipe: 3 },
        { nama_bahan: "1 sdt Baking Powder", id_recipe: 3 },
        // { nama_bahan: "200 gram beras, cuci bersih", id_recipe: 3 },
        // { nama_bahan: "1,5 liter air kaldu ayam", id_recipe: 3 },
        // {
        //   nama_bahan: "100 gram gula merah, cincang halus",
        //   id_recipe: 3,
        // },
        // { nama_bahan: "1 lembar daun salam", id_recipe: 3 },
        // { nama_bahan: "2 lembar daun pandan, simpulkan", id_recipe: 3 },
        // { nama_bahan: "1 sendok teh garam", id_recipe: 3 },
        // {
        //   nama_bahan: "1 ekor ayam kampung, potong menjadi beberapa bagian",
        //   id_recipe: 3,
        // },
        // { nama_bahan: "2 liter air", id_recipe: 3 },
        // { nama_bahan: "2 batang serai, memarkan", id_recipe: 3 },
        // { nama_bahan: "3 lembar daun jeruk", id_recipe: 3 },
        // { nama_bahan: "2 lembar daun salam", id_recipe: 3 },
        // { nama_bahan: "5 cm lengkuas, memarkan", id_recipe: 3 },
        // { nama_bahan: "3 siung bawang putih, memarkan", id_recipe: 3 },
        // { nama_bahan: "1 sendok teh merica butir", id_recipe: 3 },
        // { nama_bahan: "2 sendok teh garam", id_recipe: 3 },

        // {
        //   nama_bahan: "4 ekor lele, bersihkan dan buang isi perutnya",
        //   id_recipe: 4,
        // },
        // { nama_bahan: "2 sendok makan air jeruk nipis", id_recipe: 4 },
        // { nama_bahan: "1 sendok teh garam", id_recipe: 4 },
        // { nama_bahan: "Minyak untuk menggoreng", id_recipe: 4 },
        // { nama_bahan: "4 siung bawang putih", id_recipe: 4 },
        // { nama_bahan: "2 cm kunyit", id_recipe: 4 },
        // { nama_bahan: "1 sendok teh ketumbar", id_recipe: 4 },
        // { nama_bahan: "1 sendok teh garam", id_recipe: 4 },
        // { nama_bahan: "10 buah cabai rawit merah", id_recipe: 4 },
        // { nama_bahan: "5 buah cabai merah keriting", id_recipe: 4 },
        // { nama_bahan: "4 siung bawang merah", id_recipe: 4 },
        // { nama_bahan: "2 siung bawang putih", id_recipe: 4 },
        // {
        //   nama_bahan: "1 buah tomat merah, potong-potong",
        //   id_recipe: 4,
        // },
        // { nama_bahan: "1 sendok teh terasi, bakar", id_recipe: 4 },
        // { nama_bahan: "1 sendok teh gula merah, serut", id_recipe: 4 },
        // { nama_bahan: "1 sendok teh garam", id_recipe: 4 },
        // {
        //   nama_bahan: "1 sendok makan air jeruk limau (atau jeruk nipis)",
        //   id_recipe: 4,
        // },

        // {
        //   nama_bahan:
        //     "500 gram daging sapi (bagian sengkel atau sandung lamur), potong-potong",
        //   id_recipe: 5,
        // },
        // { nama_bahan: "4 sendok makan kecap manis", id_recipe: 5 },
        // { nama_bahan: "2 sendok makan kecap asin", id_recipe: 5 },
        // {
        //   nama_bahan: "2 sendok makan minyak untuk menumis",
        //   id_recipe: 5,
        // },
        // { nama_bahan: "500 ml air", id_recipe: 5 },
        // { nama_bahan: "200 ml santan kental", id_recipe: 5 },
        // { nama_bahan: "2 batang serai, memarkan", id_recipe: 5 },
        // { nama_bahan: "3 lembar daun salam", id_recipe: 5 },
        // { nama_bahan: "3 lembar daun jeruk", id_recipe: 5 },
        // { nama_bahan: "1 batang kayu manis", id_recipe: 5 },
        // { nama_bahan: "5 butir cengkeh", id_recipe: 5 },
        // {
        //   nama_bahan: "1 sendok teh asam jawa, larutkan dalam sedikit air",
        //   id_recipe: 5,
        // },
        // { nama_bahan: "Garam dan gula merah secukupnya", id_recipe: 5 },
        // { nama_bahan: "6 siung bawang merah", id_recipe: 5 },
        // { nama_bahan: "4 siung bawang putih", id_recipe: 5 },
        // { nama_bahan: "2 cm jahe", id_recipe: 5 },
        // { nama_bahan: "2 cm lengkuas", id_recipe: 5 },
        // { nama_bahan: "1 sendok teh ketumbar", id_recipe: 5 },
        // { nama_bahan: "1/2 sendok teh merica", id_recipe: 5 },
        // { nama_bahan: "1/2 sendok teh pala bubuk", id_recipe: 5 },
      ]);

      await queryInterface.bulkInsert("langkahs", [
        //langkah langkah 1
        {
          nama_langkah: "Aduk semua bahan saus jadi satu sampai larut.",
          id_recipe: 1,
          img: "ayam-hongkong1.jpg",
          img_url: "/photos/step/ayam-hongkong1.jpg",
        },
        {
          nama_langkah:
            "Iris tipis bawang putih, bawang merah dan jahe. Untuk daun bawang potong kasar saja.",
          id_recipe: 1,
          img: "ayam-hongkong2.jpg",
          img_url: "/photos/step/ayam-hongkong2.jpg",
        },
        {
          nama_langkah:
            "Letakkan ayam yang sudah di cuci bersih kedalam wajan. Taburi diatasnya dengan bawang putih, bawang merah dan daun bawang.",
          id_recipe: 1,
          img: "ayam-hongkong3.jpg",
          img_url: "/photos/step/ayam-hongkong3.jpg",
        },
        {
          nama_langkah:
            "Tuang larutan saus merata diatas ayam. Nyalakan api sedang cenderung kecil. Tutup wajannya.",
          id_recipe: 1,
          img: "ayam-hongkong4.jpg",
          img_url: "/photos/step/ayam-hongkong4.jpg",
        },
        {
          nama_langkah:
            "Masak sambil dibolak balik agar bumbu meresap dan warnanya cantik. Sampai sausnya menyusut.",
          id_recipe: 1,
          img: "ayam-hongkong5.jpg",
          img_url: "/photos/step/ayam-hongkong5.jpg",
        },
        {
          nama_langkah: "Angkat ayam dan potong-potong",
          id_recipe: 1,
          img: "ayam-hongkong6.jpg",
          img_url: "/photos/step/ayam-hongkong6.jpg",
        },
        {
          nama_langkah:
            "Haluskan semua bahan sambal menggunakan blender. Pindahkan kemangkok saus.",
          id_recipe: 1,
          img: "ayam-hongkong7.jpg",
          img_url: "/photos/step/ayam-hongkong7.jpg",
        },
        {
          nama_langkah: "Sajikan hangat bersama sambalnya.",
          id_recipe: 1,
          img: "ayam-hongkong8.jpg",
          img_url: "/photos/step/ayam-hongkong8.jpg",
        },
        //langkah langkah 2
        {
          nama_langkah:
            "Siapkan bumbu basah dan bumbu kering dari tepung sajiku.",
          id_recipe: 2,
        },
        {
          nama_langkah:
            "Masukkan ayam ke tepung basah lalu kedalam tepung kering",
          id_recipe: 2,
        },
        {
          nama_langkah: "Panaskan minyak",
          id_recipe: 2,
        },
        {
          nama_langkah: "Panaskan minyak",
          id_recipe: 2,
        },
        {
          nama_langkah: "Goreng ayam hingga matang dan kecoklatan",
          id_recipe: 2,
        },
        {
          nama_langkah: "Angkat tiriskan",
          id_recipe: 2,
        },
        {
          nama_langkah: "Siapkan ulekan.",
          id_recipe: 2,
        },
        {
          nama_langkah:
            "Goreng kacang mete, cabe, bawang merah dan bawang putih. Lalu tiriskan dan uleg hingga halus.",
          id_recipe: 2,
        },
        {
          nama_langkah: "Tambahkan penyedap, garam dan lada bubuk.",
          id_recipe: 2,
        },
        {
          nama_langkah: "Sajikan",
          id_recipe: 2,
        },
        {
          nama_langkah:
            "Cuci bersih udang, kupas kulit luar dan buang kotorannya.",
          id_recipe: 2,
        },
        {
          nama_langkah:
            "Bahan Marinasi : haluskan bawang putih, campurkan ke udang yang telah dicuci bersih, tambahkan gula, penyedap rasa, dan lada. Diamkan selama 15 menit.",
          id_recipe: 2,
        },
        {
          nama_langkah:
            "Adonan Tepung Kering : Campurkan semua adonan tepung kering. Aduk rata.",
          id_recipe: 2,
        },
        {
          nama_langkah:
            "Adonan Tepung Cair : Ambil 2-3 sendok adonan tepung kering, lalu beri air hingga agak encer.",
          id_recipe: 2,
        },
        {
          nama_langkah:
            "Pegang bagian ekornya, celupkan udang kedalam adonan tepung cair, lalu ke tepung kering, celupkan kembali ke tepung cair, lalu ke tepung kering lagi.",
          id_recipe: 2,
        },
        {
          nama_langkah: "Goreng dalam minyak panas hingga matang.",
          id_recipe: 2,
        },
        {
          nama_langkah: "Udang goreng tepung siap disajikan.",
          id_recipe: 2,
        },
        // // langkah langkah 3
        // {
        //   nama_langkah:
        //     "Rebus ayam kampung dalam 2 liter air bersama serai, daun jeruk, daun salam, lengkuas, bawang putih, merica butir, dan garam.",
        //   id_recipe: 3,
        // },
        // {
        //   nama_langkah:
        //     "Masak hingga ayam empuk dan keluar kaldu yang kaya rasa.",
        //   id_recipe: 3,
        // },
        // {
        //   nama_langkah:
        //     "Angkat ayam dan sisihkan untuk disuwir-suwir. Saring kaldu dan gunakan untuk memasak bubur.",
        //   id_recipe: 3,
        // },
        // {
        //   nama_langkah:
        //     "Rebus beras bersama 1,5 liter air kaldu ayam, daun salam, daun pandan, dan garam.",
        //   id_recipe: 3,
        // },
        // {
        //   nama_langkah:
        //     "Masak dengan api kecil sambil diaduk-aduk hingga beras menjadi bubur yang kental dan lembut. Jika air kaldu habis tapi bubur belum cukup kental, tambahkan air panas sedikit demi sedikit hingga mencapai konsistensi yang diinginkan.",
        //   id_recipe: 3,
        // },
        // {
        //   nama_langkah: "Tuang bubur ke dalam mangkuk saji.",
        //   id_recipe: 3,
        // },
        // {
        //   nama_langkah:
        //     "Taburi dengan ayam suwir, kacang kedelai goreng, bawang goreng, seledri, dan daun bawang.",
        //   id_recipe: 3,
        // },
        // {
        //   nama_langkah:
        //     "Tambahkan kerupuk, sambal, dan kecap manis sesuai selera.",
        //   id_recipe: 3,
        // },
        // //langkah langkah 4
        // {
        //   nama_langkah:
        //     "Lumuri lele yang sudah dibersihkan dengan air jeruk nipis dan garam. Diamkan selama 15 menit untuk mengurangi bau amis.",
        //   id_recipe: 4,
        // },
        // {
        //   nama_langkah:
        //     "Haluskan bawang putih, kunyit, ketumbar, dan garam. Lumuri lele dengan bumbu halus ini hingga merata. Diamkan selama minimal 30 menit agar bumbu meresap.",
        //   id_recipe: 4,
        // },
        // {
        //   nama_langkah:
        //     "Panaskan minyak dalam jumlah yang cukup banyak di wajan. Goreng lele hingga berwarna kecokelatan dan matang sempurna. Angkat dan tiriskan.",
        //   id_recipe: 4,
        // },
        // {
        //   nama_langkah:
        //     "Goreng cabai rawit, cabai merah, bawang merah, bawang putih, dan tomat hingga layu.",
        //   id_recipe: 4,
        // },
        // {
        //   nama_langkah:
        //     "Haluskan bahan yang telah digoreng bersama dengan terasi, gula merah, dan garam. Anda bisa menggunakan cobek atau blender.",
        //   id_recipe: 4,
        // },
        // {
        //   nama_langkah:
        //     "Tambahkan air jeruk limau ke dalam sambal dan aduk rata.",
        //   id_recipe: 4,
        // },
        // {
        //   nama_langkah:
        //     "Sajikan lele goreng dengan sambal pecel di atas piring.",
        //   id_recipe: 4,
        // },
        // //langkah langkah 5
        // {
        //   nama_langkah:
        //     "Potong-potong daging sapi sesuai selera, kemudian sisihkan.",
        //   id_recipe: 5,
        // },
        // {
        //   nama_langkah:
        //     "Haluskan semua bahan bumbu halus menggunakan blender atau cobek hingga benar-benar halus.",
        //   id_recipe: 5,
        // },
        // {
        //   nama_langkah:
        //     "Panaskan minyak dalam wajan besar. Tumis bumbu halus bersama serai, daun salam, dan daun jeruk hingga harum dan matang.",
        //   id_recipe: 5,
        // },
        // {
        //   nama_langkah:
        //     "Masukkan potongan daging ke dalam wajan, aduk hingga daging berubah warna.",
        //   id_recipe: 5,
        // },
        // {
        //   nama_langkah: "Tambahkan kayu manis dan cengkeh, aduk rata.",
        //   id_recipe: 5,
        // },
        // {
        //   nama_langkah:
        //     "Masukkan kecap manis dan kecap asin, aduk hingga rata.",
        //   id_recipe: 5,
        // },
        // {
        //   nama_langkah:
        //     "Tuangkan air ke dalam wajan, aduk rata, dan masak hingga daging empuk. Tutup wajan dan masak dengan api kecil agar daging meresap dengan baik.",
        //   id_recipe: 5,
        // },
        // {
        //   nama_langkah:
        //     "Setelah daging mulai empuk, tambahkan santan kental dan air asam jawa, aduk rata.",
        //   id_recipe: 5,
        // },
        // {
        //   nama_langkah:
        //     "Tambahkan garam dan gula merah secukupnya, sesuai selera.",
        //   id_recipe: 5,
        // },
        // {
        //   nama_langkah:
        //     "Masak hingga kuah menyusut dan mengental, sambil sesekali diaduk agar tidak gosong. Pastikan daging benar-benar empuk dan bumbu meresap sempurna.",
        //   id_recipe: 5,
        // },
        // {
        //   nama_langkah:
        //     "Angkat malbi dari wajan dan sajikan hangat dengan nasi putih dan pelengkap seperti acar atau sambal.",
        //   id_recipe: 5,
        // },
      ]);

      await queryInterface.bulkInsert("komentars", [
        { deskripsi: "keren abis", id_user: 1, id_recipe: 1 },
        { deskripsi: "asli enak", id_user: 2, id_recipe: 1 },
        { deskripsi: "saya suka ini", id_user: 1, id_recipe: 2 },
        { deskripsi: "kenapa bisa enak gini ya ?", id_user: 2, id_recipe: 2 },
        // {
        //   deskripsi: "enakkkkkkkkkk polllllllll",
        //   id_user: 2,
        //   id_recipe: 2,
        // },
        // {
        //   deskripsi: "ga bisa komennn wenaakkk",
        //   id_user: 2,
        //   id_recipe: 2,
        // },
        // {
        //   deskripsi: "kurang pas di lidah saya karena kurang asin",
        //   id_user: 2,
        //   id_recipe: 2,
        // },
        // { deskripsi: "wenak pollll", id_user: 3, id_recipe: 3 },
        // {
        //   deskripsi: "sekelas bintang lima ",
        //   id_user: 3,
        //   id_recipe: 3,
        // },
        // {
        //   deskripsi: "soal rasa jangan ditanya",
        //   id_user: 3,
        //   id_recipe: 3,
        // },
        // {
        //   deskripsi: "lebih enak dari yang dibeli kemarin ",
        //   id_user: 4,
        //   id_recipe: 4,
        // },
        // {
        //   deskripsi: "mantap patut dicoba ini ",
        //   id_user: 4,
        //   id_recipe: 4,
        // },
        // { deskripsi: "asiiiikkk ", id_user: 4, id_recipe: 5 },
        // { deskripsi: "xixixixixixi", id_user: 5, id_recipe: 5 },
        // {
        //   deskripsi: "kata adik saya siih ini juaranya wkwk",
        //   id_user: 5,
        //   id_recipe: 5,
        // },
      ]);
      await queryInterface.bulkInsert("reaksis", [
        { nama_reaksi: "smile", id_user: 1, id_recipe: 1 },
        { nama_reaksi: "love", id_user: 1, id_recipe: 1 },
        { nama_reaksi: "clap", id_user: 2, id_recipe: 1 },
      ]);

      await queryInterface.bulkInsert("favorites", [
        { id_user: 1, id_recipe: 1 },
        { id_user: 2, id_recipe: 1 },
        { id_user: 1, id_recipe: 2 },
        { id_user: 2, id_recipe: 2 },
        // { id: 3, id_user: 3, id_recipe: 3 },
        // { id: 4, id_user: 4, id_recipe: 4 },
        // { id: 5, id_user: 5, id_recipe: 5 },
        // { id: 6, id_user: 2, id_recipe: 1 },
        // { id: 7, id_user: 3, id_recipe: 2 },
        // { id: 8, id_user: 1, id_recipe: 3 },
        // { id: 9, id_user: 5, id_recipe: 4 },
      ]);

      await queryInterface.bulkInsert("cooksnaps", [
        {
          name_cooksnap: "enak banget, keluarga saya pada suka",
          img: "ayam-hongkong-cooksnap.jpg",
          img_url: "/photos/cooksnap/ayam-hongkong-cooksnap.jpg",
          id_user: 2,
          id_recipe: 1,
        },
        {
          name_cooksnap: "enak banget, keluarga saya pada suka",
          img: "udang-goreng-cooksnap.jpg",
          img_url: "/photos/cooksnap/udang-goreng-cooksnap.jpg",
          id_user: 2,
          id_recipe: 3,
        },
        // {
        //   id: 2,
        //   name_cooksnap: "anton12",
        //   gambar_cooksnap: "gambar_cooksnap_2",
        //   id_user: 2,
        //   id_recipe: 1,
        // },
        // {
        //   id: 3,
        //   name_cooksnap: "haikal sangPemasak",
        //   gambar_cooksnap: "gambar_cooksnap_3",
        //   id_user: 3,
        //   id_recipe: 2,
        // },
        // {
        //   id: 4,
        //   name_cooksnap: "sadam siahli AYAM",
        //   gambar_cooksnap: "gambar_cooksnap_4",
        //   id_user: 4,
        //   id_recipe: 3,
        // },
        // {
        //   id: 5,
        //   name_cooksnap: "PAKDE Imam si Ahli Masak",
        //   gambar_cooksnap: "gambar_cooksnap_5",
        //   id_user: 5,
        //   id_recipe: 2,
        // },
      ]);

      await queryInterface.bulkInsert("kategoris", [
        {
          id: 1,
          nama_kategori: "sarapan",
          nama_foto_kategori: "bubur ayam pak haji mamat",
          foto_kategori_url: "foto_sarapan.jpg",
        },
        {
          id: 2,
          nama_kategori: "masakan rumah",
          nama_foto_kategori: "kue pukis by ibu jamiah",
          foto_kategori_url: "masakan_rumah.jpg",
        },
        {
          id: 3,
          nama_kategori: "makanan kaki lima ",
          nama_foto_kategori: "kue pukis by ibu jamiah",
          foto_kategori_url: "makanan_kaki_lima.jpg",
        },
        {
          id: 4,
          nama_kategori: "AYAM",
          nama_foto_kategori: "kue pukis by ibu jamiah",
          foto_kategori_url: "foto_olahan_ayam.jpg",
        },
        {
          id: 5,
          nama_kategori: "SAPI",
          nama_foto_kategori: "kue pukis by ibu jamiah",
          foto_kategori_url: "foto_olahan_sapi.jpg",
        },
      ]);

      console.log("Seeding berhasil.");
    } catch (error) {
      console.error("Error saat melakukan seeding:", error);
    } finally {
      // Mengaktifkan kembali pemeriksaan kunci asing
      await queryInterface.sequelize.query("SET FOREIGN_KEY_CHECKS = 1;");
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
