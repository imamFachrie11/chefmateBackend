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
      await queryInterface.bulkDelete('kategoris', null, {});

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
        {
          id: 3,
          email_user: "imam@gmail.com",
          name_user: "mas imam",
          password_user:
            "$2a$12$GvcOCCiKubV3U58uljXsW.WEQ0QKABC6OPZAFUyveuQJezgOR51bS", //yo
          deskripsi_user:
            "resep ini cocok untuk lidah yang suka dengan yg manis manis seperti hidup saya",
          gambar: "gambar/user.jpg",
        },
        {
          id: 4,
          email_user: "gusti@gmail.com",
          name_user: "gusti",
          password_user:
            "$2a$12$GvcOCCiKubV3U58uljXsW.WEQ0QKABC6OPZAFUyveuQJezgOR51bS", //yo
          deskripsi_user:
            "ini resep orang tua saya harap dapan membantu para cookers dalam mencari resep pilihan terbaik",
          gambar: "gambar/user.jpg",
        },
        {
          id: 5,
          email_user: "ihsan@gmail.com",
          name_user: "ihsan",
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
          foto_recipe_url: "image_ayam_kecap.jpg",
          porsi: 2,
          durasi: 30,
          id_user: 1,
          id_kategori: 1
        },
        { 
          id: 2, 
          judul: "ayam goreng kak ros mantapp", 
          foto_recipe: "foto ayamm by kak ros",
          foto_recipe_url: "image_poto_ayam.jpg", 
          porsi: 2, 
          durasi: 2,
          id_user: 2,
          id_kategori: 2

        },
        { 
          id: 3, 
          judul: "bubur ayam khas solo", 
          foto_recipe: "bubur ayam khas abang sodikin",
          foto_recipe_url: "image_bubur_ayam.jpg", 
          porsi: 1, 
          durasi: 2,
          id_user: 3,
          id_kategori: 3

        },
        { 
          id: 4, 
          judul: "pecel lele khas lamongan", 
          foto_recipe: "pecinta pecel lele khas abang marwan ",
          foto_recipe_url: "image_poto_pecel_lele.jpg", 
          porsi: 1, 
          durasi: 2,
          id_user: 4,
          id_kategori: 4

        },
        { 
          id: 5, 
          judul: "malbi dari daging sapi", 
          foto_recipe: "malbi by bunda khairi",
          foto_recipe_url: "image_malbi.jpg", 
          porsi: 1, 
          durasi: 2,
          id_user: 5,
          id_kategori: 5

        },
      ]);
        // Masukkan data lainnya jika diperlukan

      await queryInterface.bulkInsert("jenis_makanans", [
        { id: 1, nama_jenis_makanan: "#godainramsay_ayamstrong", id_recipe: 1 },
        { id: 2, nama_jenis_makanan: "#godapaders_2024", id_recipe: 5 },
        { id: 3, nama_jenis_makanan: "#godainabangpake_buburayam andalan", id_recipe: 3 },
        { id: 4, nama_jenis_makanan: "#favoritorangtua_2024", id_recipe: 2 },
        { id: 5, nama_jenis_makanan: "#resepkhasoppah", id_recipe: 4 },
      ]);

      await queryInterface.bulkInsert("bahans", [
      { id: 1, nama_bahan: "500 ml kecap asin", id_recipe: 1 },
      { id: 2, nama_bahan: "250 ml air", id_recipe: 1 },
      { id: 3, nama_bahan: "100 gram gula merah, cincang halus", id_recipe: 1 },
      { id: 4, nama_bahan: "2 batang kayu manis", id_recipe: 1 },
      { id: 5, nama_bahan: "4 bunga lawang (star anise)", id_recipe: 1 },
      { id: 6, nama_bahan: "5 cm jahe, memarkan", id_recipe: 1 },
      { id: 7, nama_bahan: "3 siung bawang putih, memarkan", id_recipe: 1 },
      { id: 8, nama_bahan: "2 lembar daun salam", id_recipe: 1 },
      { id: 9, nama_bahan: "1 sdm biji ketumbar", id_recipe: 1 },
      { id: 10, nama_bahan: "1 sdm biji adas", id_recipe: 1 },
      { id: 11, nama_bahan: "1 sdm merica hitam utuh", id_recipe: 1 },
      { id: 12, nama_bahan: "2-3 helai kulit jeruk kering (opsional, untuk memberikan aroma yang khas)", id_recipe: 1 },

      { id: 13, nama_bahan: "1 ekor ayam, potong menjadi beberapa bagian", id_recipe: 2},
      { id: 14, nama_bahan: "2 sendok makan air jeruk nipis atau lemon", id_recipe: 2 },
      { id: 15, nama_bahan: "2 sendok teh garam", id_recipe: 2},
      { id: 16, nama_bahan: "1 liter minyak untuk menggoreng", id_recipe: 2 },
      { id: 17, nama_bahan: "4 siung bawang putih, haluskan", id_recipe: 2 },
      { id: 18, nama_bahan: "2 cm jahe, haluskan", id_recipe: 1 },
      { id: 19, nama_bahan: "1 sendok makan ketumbar bubuk", id_recipe: 2 },
      { id: 20, nama_bahan: "1 sendok teh kunyit bubuk", id_recipe: 2 },
      { id: 21, nama_bahan: "1 sendok teh merica bubuk", id_recipe: 2 },
      { id: 22, nama_bahan: "2 sendok makan saus tiram (opsional)", id_recipe: 2 },
      { id: 23, nama_bahan: "1 sendok makan kecap asin", id_recipe: 2 },
      { id: 24, nama_bahan: "1 sendok makan kecap manis", id_recipe: 2 },
     
      { id: 25, nama_bahan: "200 gram beras, cuci bersih", id_recipe: 3 },
      { id: 26, nama_bahan: "1,5 liter air kaldu ayam", id_recipe: 3 },
      { id: 27, nama_bahan: "100 gram gula merah, cincang halus", id_recipe: 3 },
      { id: 28, nama_bahan: "1 lembar daun salam", id_recipe: 3 },
      { id: 29, nama_bahan: "2 lembar daun pandan, simpulkan", id_recipe: 3 },
      { id: 30, nama_bahan: "1 sendok teh garam", id_recipe: 3 },
      { id: 31, nama_bahan: "1 ekor ayam kampung, potong menjadi beberapa bagian", id_recipe: 3 },
      { id: 32, nama_bahan: "2 liter air", id_recipe: 3 },
      { id: 33, nama_bahan: "2 batang serai, memarkan", id_recipe: 3 },
      { id: 34, nama_bahan: "3 lembar daun jeruk", id_recipe: 3 },
      { id: 35, nama_bahan: "2 lembar daun salam", id_recipe: 3 },
      { id: 36, nama_bahan: "5 cm lengkuas, memarkan", id_recipe: 3 },
      { id: 37, nama_bahan: "3 siung bawang putih, memarkan", id_recipe: 3 },
      { id: 38, nama_bahan: "1 sendok teh merica butir", id_recipe: 3 },
      { id: 39, nama_bahan: "2 sendok teh garam", id_recipe: 3 },
     
      { id: 40, nama_bahan: "4 ekor lele, bersihkan dan buang isi perutnya", id_recipe: 4 },
      { id: 41, nama_bahan: "2 sendok makan air jeruk nipis", id_recipe: 4 },
      { id: 42, nama_bahan: "1 sendok teh garam", id_recipe: 4 },
      { id: 43, nama_bahan: "Minyak untuk menggoreng", id_recipe: 4 },
      { id: 44, nama_bahan: "4 siung bawang putih", id_recipe: 4 },
      { id: 45, nama_bahan: "2 cm kunyit", id_recipe: 4 },
      { id: 46, nama_bahan: "1 sendok teh ketumbar", id_recipe: 4 },
      { id: 47, nama_bahan: "1 sendok teh garam", id_recipe: 4 },
      { id: 48, nama_bahan: "10 buah cabai rawit merah", id_recipe: 4 },
      { id: 49, nama_bahan: "5 buah cabai merah keriting", id_recipe: 4 },
      { id: 50, nama_bahan: "4 siung bawang merah", id_recipe: 4 },
      { id: 51, nama_bahan: "2 siung bawang putih", id_recipe: 4 },
      { id: 52, nama_bahan: "1 buah tomat merah, potong-potong", id_recipe: 4 },
      { id: 53, nama_bahan: "1 sendok teh terasi, bakar", id_recipe: 4 },
      { id: 54, nama_bahan: "1 sendok teh gula merah, serut", id_recipe: 4 },
      { id: 55, nama_bahan: "1 sendok teh garam", id_recipe: 4 },
      { id: 56, nama_bahan: "1 sendok makan air jeruk limau (atau jeruk nipis)", id_recipe: 4 },
     
      { id: 57, nama_bahan: "500 gram daging sapi (bagian sengkel atau sandung lamur), potong-potong", id_recipe: 5 },
      { id: 58, nama_bahan: "4 sendok makan kecap manis", id_recipe: 5 },
      { id: 59, nama_bahan: "2 sendok makan kecap asin", id_recipe: 5 },
      { id: 60, nama_bahan: "2 sendok makan minyak untuk menumis", id_recipe: 5 },
      { id: 61, nama_bahan: "500 ml air", id_recipe: 5 },
      { id: 62, nama_bahan: "200 ml santan kental", id_recipe: 5 },
      { id: 63, nama_bahan: "2 batang serai, memarkan", id_recipe: 5},
      { id: 64, nama_bahan: "3 lembar daun salam", id_recipe: 5 },
      { id: 65, nama_bahan: "3 lembar daun jeruk", id_recipe: 5 },
      { id: 66, nama_bahan: "1 batang kayu manis", id_recipe: 5 },
      { id: 67, nama_bahan: "5 butir cengkeh", id_recipe: 5 },
      { id: 68, nama_bahan: "1 sendok teh asam jawa, larutkan dalam sedikit air", id_recipe: 5 },
      { id: 69, nama_bahan: "Garam dan gula merah secukupnya", id_recipe: 5 },
      { id: 70, nama_bahan: "6 siung bawang merah", id_recipe: 5 },
      { id: 71, nama_bahan: "4 siung bawang putih", id_recipe: 5 },
      { id: 72, nama_bahan: "2 cm jahe", id_recipe: 5 },
      { id: 73, nama_bahan: "2 cm lengkuas", id_recipe: 5 },
      { id: 74, nama_bahan: "1 sendok teh ketumbar", id_recipe: 5 },
      { id: 75, nama_bahan: "1/2 sendok teh merica", id_recipe: 5 },
      { id: 76, nama_bahan: "1/2 sendok teh pala bubuk", id_recipe: 5 },


    ]);

      await queryInterface.bulkInsert("langkahs", [
        //langkah langkah 1
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
          id_recipe: 1,
        },
          //langkah langkah 2
        {
          id: 6,
          nama_langkah: "Cuci bersih potongan ayam, kemudian lumuri dengan air jeruk nipis atau lemon dan 2 sendok teh garam. Diamkan selama 15 menit, lalu bilas hingga bersih.",
          id_recipe: 2,
        },
        {
          id: 7,
          nama_langkah:
            "Campurkan semua bahan marinasi dalam wadah besar. Masukkan potongan ayam dan aduk hingga semua bagian ayam terlapisi bumbu marinasi. Diamkan selama minimal 30 menit, lebih baik jika didiamkan semalaman di dalam lemari es.",
          id_recipe: 2,
        },
        {
          id: 8,
          nama_langkah:
            "Jika ingin ayam yang lebih renyah, campurkan tepung terigu, tepung maizena, baking powder, garam, merica bubuk, dan paprika bubuk dalam wadah. Gulingkan potongan ayam yang telah dimarinasi ke dalam campuran tepung hingga terlapisi merata.",
          id_recipe: 2,
        },
        {
          id: 9,
          nama_langkah:
            "Panaskan minyak dalam wajan besar dengan api sedang-tinggi. Pastikan minyak cukup banyak agar ayam bisa terendam saat digoreng.",
          id_recipe: 2,
        },
        {
          id: 10,
          nama_langkah:
            "Goreng ayam dalam minyak panas hingga berwarna kecokelatan dan matang sempurna. Jangan terlalu banyak memasukkan ayam dalam sekali goreng agar minyak tetap panas dan ayam tidak terlalu berminyak.",
          id_recipe: 2,
        },
        {
          id: 11,
          nama_langkah:
            "Angkat dan tiriskan ayam goreng di atas kertas minyak atau tisu dapur untuk menghilangkan kelebihan minyak.",
          id_recipe: 2,
        },
        {
          id: 12,
          nama_langkah:
            "Sajikan ayam goreng dengan nasi putih hangat, sambal, dan lalapan sesuai selera.",
          id_recipe: 2,
        },
        // langkah langkah 3
        {
          id: 13,
          nama_langkah: 
          "Rebus ayam kampung dalam 2 liter air bersama serai, daun jeruk, daun salam, lengkuas, bawang putih, merica butir, dan garam.",
          id_recipe: 3,
        },
        {
          id: 14,
          nama_langkah:
            "Masak hingga ayam empuk dan keluar kaldu yang kaya rasa.",
          id_recipe: 3,
        },
        {
          id: 15,
          nama_langkah:
            "Angkat ayam dan sisihkan untuk disuwir-suwir. Saring kaldu dan gunakan untuk memasak bubur.",
          id_recipe: 3,
        },
        {
          id: 16,
          nama_langkah:
            "Rebus beras bersama 1,5 liter air kaldu ayam, daun salam, daun pandan, dan garam.",
          id_recipe: 3,
        },
        {
          id: 17,
          nama_langkah:
            "Masak dengan api kecil sambil diaduk-aduk hingga beras menjadi bubur yang kental dan lembut. Jika air kaldu habis tapi bubur belum cukup kental, tambahkan air panas sedikit demi sedikit hingga mencapai konsistensi yang diinginkan.",
          id_recipe: 3,
        },
        {
          id: 18,
          nama_langkah:
            "Tuang bubur ke dalam mangkuk saji.",
          id_recipe: 3,
        },
        {
          id: 19,
          nama_langkah:
            "Taburi dengan ayam suwir, kacang kedelai goreng, bawang goreng, seledri, dan daun bawang.",
          id_recipe: 3,
        },
        {
          id: 20,
          nama_langkah:
            "Tambahkan kerupuk, sambal, dan kecap manis sesuai selera.",
          id_recipe: 3,
        },
          //langkah langkah 4
        {
          id: 21,
          nama_langkah: 
          "Lumuri lele yang sudah dibersihkan dengan air jeruk nipis dan garam. Diamkan selama 15 menit untuk mengurangi bau amis.",
          id_recipe: 4,
        },
        {
          id: 22,
          nama_langkah:
            "Haluskan bawang putih, kunyit, ketumbar, dan garam. Lumuri lele dengan bumbu halus ini hingga merata. Diamkan selama minimal 30 menit agar bumbu meresap.",
          id_recipe: 4,
        },
        {
          id: 23,
          nama_langkah:
            "Panaskan minyak dalam jumlah yang cukup banyak di wajan. Goreng lele hingga berwarna kecokelatan dan matang sempurna. Angkat dan tiriskan.",
          id_recipe: 4,
        },
        {
          id: 24,
          nama_langkah:
            "Goreng cabai rawit, cabai merah, bawang merah, bawang putih, dan tomat hingga layu.",
          id_recipe: 4,
        },
        {
          id: 25,
          nama_langkah:
            "Haluskan bahan yang telah digoreng bersama dengan terasi, gula merah, dan garam. Anda bisa menggunakan cobek atau blender.",
          id_recipe: 4,
        },
        {
          id: 26,
          nama_langkah:
            "Tambahkan air jeruk limau ke dalam sambal dan aduk rata.",
          id_recipe: 4,
        },
        {
          id: 27,
          nama_langkah:
            "Sajikan lele goreng dengan sambal pecel di atas piring.",
          id_recipe: 4,
        },
        //langkah langkah 5
        {
          id: 28,
          nama_langkah: "Potong-potong daging sapi sesuai selera, kemudian sisihkan.",
          id_recipe: 5,
        },
        {
          id: 29,
          nama_langkah:
            "Haluskan semua bahan bumbu halus menggunakan blender atau cobek hingga benar-benar halus.",
          id_recipe: 5,
        },
        {
          id: 30,
          nama_langkah:
            "Panaskan minyak dalam wajan besar. Tumis bumbu halus bersama serai, daun salam, dan daun jeruk hingga harum dan matang.",
          id_recipe: 5,
        },
        {
          id: 31,
          nama_langkah:
            "Masukkan potongan daging ke dalam wajan, aduk hingga daging berubah warna.",
          id_recipe: 5,
        },
        {
          id: 32,
          nama_langkah:
            "Tambahkan kayu manis dan cengkeh, aduk rata.",
          id_recipe: 5,
        },
        {
          id: 33,
          nama_langkah:
            "Masukkan kecap manis dan kecap asin, aduk hingga rata.",
          id_recipe: 5,
        },
        {
          id: 34,
          nama_langkah:
            "Tuangkan air ke dalam wajan, aduk rata, dan masak hingga daging empuk. Tutup wajan dan masak dengan api kecil agar daging meresap dengan baik.",
          id_recipe: 5,
        },
        {
          id: 35,
          nama_langkah:
            "Setelah daging mulai empuk, tambahkan santan kental dan air asam jawa, aduk rata.",
          id_recipe: 5,
        },
        {
          id: 36,
          nama_langkah:
            "Tambahkan garam dan gula merah secukupnya, sesuai selera.",
          id_recipe: 5,
        },
        {
          id: 37,
          nama_langkah:
            "Masak hingga kuah menyusut dan mengental, sambil sesekali diaduk agar tidak gosong. Pastikan daging benar-benar empuk dan bumbu meresap sempurna.",
          id_recipe: 5,
        },
        {
          id: 38,
          nama_langkah:
            "Angkat malbi dari wajan dan sajikan hangat dengan nasi putih dan pelengkap seperti acar atau sambal.",
          id_recipe: 5,
        },
      ]);

      await queryInterface.bulkInsert("komentars", [
        { id: 1, deskripsi: "keren abis", id_user: 1, id_recipe: 1 },
        { id: 2, deskripsi: "asli enak", id_user: 2, id_recipe: 1 },
        { id: 3, deskripsi: "sesuai dengan lidah saya", id_user: 3, id_recipe: 1 },
        { id: 4, deskripsi: "resep ini mengingatkan saya kepada ibu saya", id_user: 4, id_recipe: 1 },
        { id: 5, deskripsi: "minggu ini harus bisa dicoba", id_user: 5, id_recipe: 1 },
        { id: 6, deskripsi: "enakkkkkkkkkk polllllllll", id_user: 2, id_recipe: 2 },
        { id: 7, deskripsi: "ga bisa komennn wenaakkk", id_user: 2, id_recipe: 2 },
        { id: 8, deskripsi: "kurang pas di lidah saya karena kurang asin", id_user: 2, id_recipe: 2 },
        { id: 9, deskripsi: "setelah mencoba jadi saya bisa menghemat pengeluaran saya dan belajar masak disini", id_user: 3, id_recipe: 1 },
        { id: 10, deskripsi: "wenak pollll", id_user: 3, id_recipe: 3 },
        { id: 11, deskripsi: "sekelas bintang lima ", id_user: 3, id_recipe: 3 },
        { id: 12, deskripsi: "soal rasa jangan ditanya", id_user: 3, id_recipe: 3 },
        { id: 13, deskripsi: "lebih enak dari yang dibeli kemarin ", id_user: 4, id_recipe: 4 },
        { id: 14, deskripsi: "mantap patut dicoba ini ", id_user: 4, id_recipe: 4 },
        { id: 15, deskripsi: "asiiiikkk ", id_user: 4, id_recipe: 5 },
        { id: 16, deskripsi: "xixixixixixi", id_user: 5, id_recipe: 5 },
        { id: 17, deskripsi: "kata adik saya siih ini juaranya wkwk", id_user: 5, id_recipe: 5 },
      ]);
      await queryInterface.bulkInsert("reaksis", [
        { id: 1, nama_reaksi: "like", id_user: 1, id_recipe: 1 },
        { id: 2, nama_reaksi: "like", id_user: 2, id_recipe: 1 },
        { id: 3, nama_reaksi: "like", id_user: 3, id_recipe: 1 },
        { id: 4, nama_reaksi: "like", id_user: 4, id_recipe: 2},
        { id: 5, nama_reaksi: "like", id_user: 5, id_recipe: 2 },
        { id: 6, nama_reaksi: "like", id_user: 2, id_recipe: 2 },
        { id: 7, nama_reaksi: "like", id_user: 3, id_recipe: 2 },
        { id: 8, nama_reaksi: "like", id_user: 4, id_recipe: 3 },
        { id: 9, nama_reaksi: "like", id_user: 5, id_recipe: 3 },
        { id: 10, nama_reaksi: "like", id_user: 1, id_recipe: 3 },
        { id: 11, nama_reaksi: "like", id_user: 2, id_recipe: 4 },
        { id: 12, nama_reaksi: "like", id_user: 3, id_recipe: 4 },
        { id: 13, nama_reaksi: "like", id_user: 4, id_recipe: 5 },
        { id: 14, nama_reaksi: "like", id_user: 5, id_recipe: 5 },
        { id: 15, nama_reaksi: "like", id_user: 1, id_recipe: 5 },
      ]);
      await queryInterface.bulkInsert("favorites", [
        { id: 1, id_user: 1, id_recipe: 1 },
        { id: 2, id_user: 2, id_recipe: 2 },
        { id: 3, id_user: 3, id_recipe: 3 },
        { id: 4, id_user: 4, id_recipe: 4 },
        { id: 5, id_user: 5, id_recipe: 5 },
        { id: 6, id_user: 2, id_recipe: 1 },
        { id: 7, id_user: 3, id_recipe: 2 },
        { id: 8, id_user: 1, id_recipe: 3 },
        { id: 9, id_user: 5, id_recipe: 4 },
      ]);

      await queryInterface.bulkInsert("cooksnaps", [
        {
          id: 1,
          name_cooksnap: "enak banget",
          gambar_cooksnap: "gambar_cooksnap_1",
          id_user: 1,
          id_recipe: 2,
        },
        {
          id: 2,
          name_cooksnap: "anton12",
          gambar_cooksnap: "gambar_cooksnap_2",
          id_user: 2,
          id_recipe: 1,
        },
        {
          id: 3,
          name_cooksnap: "haikal sangPemasak",
          gambar_cooksnap: "gambar_cooksnap_3",
          id_user: 3,
          id_recipe: 2,
        },
        {
          id: 4,
          name_cooksnap: "sadam siahli AYAM",
          gambar_cooksnap: "gambar_cooksnap_4",
          id_user: 4,
          id_recipe: 3,
        },
        {
          id: 5,
          name_cooksnap: "PAKDE Imam si Ahli Masak",
          gambar_cooksnap: "gambar_cooksnap_5",
          id_user: 5,
          id_recipe: 2,
        },
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
        }
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
