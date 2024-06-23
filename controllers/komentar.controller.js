const { komentar: komentarModel } = require("../models");

const createKomentar = async (req, res, next) => {
  try {
    const { id_user, id_recipe, deskripsi } = req.body;
    const create_at = new Date();

    await komentarModel.create({
      deskripsi: deskripsi,
      id_user: id_user,
      id_recipe: id_recipe,
      create_at: create_at,
    });

    return res.status(200).send({
      message: "create komentar suskes",
    });
  } catch (error) {
    return res.status(500).send({
      message: "internal error",
    });
  }
};

module.exports = {
  createKomentar,
};
