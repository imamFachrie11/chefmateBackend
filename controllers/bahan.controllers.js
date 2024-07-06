const { bahan: bahanModel } = require("../models");

const createBahan = async (req, res, next) => {
  try {
    const { id_user, id_recipe, deskripsi } = req.body;
    const create_at = new Date();

    await bahanModel.create({
      deskripsi: deskripsi,
      id_user: id_user,
      id_recipe: id_recipe,
      create_at: create_at,
    });

    return res.status(200).send({
      message: "Create Bahan Sukses",
    });
  } catch (error) {
    return res.status(500).send({
      message: "Internal eror",
    });
  }
};

module.exports = {
  createBahan,
};
