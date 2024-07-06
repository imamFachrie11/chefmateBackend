const { komentar: komentarModel } = require("../models");

const createKomentar = async (req, res, next) => {
  try {
    const { id_user, id_recipe, deskripsi } = req.body;

    await komentarModel.create({
      deskripsi: deskripsi,
      id_user: id_user,
      id_recipe: id_recipe,
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

const deleteKomentar = async (req, res, next) => {
  try {
    const { id_komentar } = req.body;

    await komentarModel.destroy({
      where: {
        id: id_komentar,
      },
    });

    return res.status(200).send({
      message: "delete komentar success",
    });
  } catch (error) {
    return res.status(500).send({
      message: "internal error",
    });
  }
};

const getKomentar = async (req, res, next) => {
  try {
    console.log("getKomentar");
    const { id_recipe } = req.body;
    console.log(id_recipe);

    const result = await komentarModel.findAll({
      where: {
        id_recipe: id_recipe,
      },
      attributes: [
        "id", 
        "id_recipe",
        "deskripsi",
        "created_at",
      ],
      include: 
        {
          association: "users",
          attributes: ["name_user"],
          // where: {name_user : {[Op.not] : null}},
          
        },
 
      order: [["created_at", "ASC"]],
      // attributes : ['id']
    });

    return res.status(200).send({
      message: "success",
      data: result,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      message: "internal error",
    });
  }
};

module.exports = {
  createKomentar,
  deleteKomentar,
  getKomentar,
};
