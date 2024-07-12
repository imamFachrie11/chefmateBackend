const { komentar: komentarModel } = require("../models");

const createKomentar = async (req, res, next) => {
  try {
    const { deskripsi } = req.body;
    const { id_recipe } = req.params;
    const userId = req.user.id;

    const newComment = await komentarModel.create({
      deskripsi: deskripsi,
      id_user: userId,
      id_recipe,
    });

    const komentarWithUser = await komentarModel.findOne({
      where: { id: newComment.id },
      attributes: [
        "id",
        "id_recipe",
        "deskripsi",
        "created_at",
        [
          komentarModel.sequelize.literal(
            `(SELECT name_user FROM users AS u WHERE u.id = komentar.id_user )`
          ),
          "name_user",
        ],
        [
          komentarModel.sequelize.literal(
            `(SELECT img FROM users AS u WHERE u.id = komentar.id_user )`
          ),
          "img_user",
        ],
        [
          komentarModel.sequelize.literal(
            `(SELECT img_url FROM users AS u WHERE u.id = komentar.id_user )`
          ),
          "img_user_url",
        ],
      ],
    });

    return res.status(201).send({
      message: "Komentar berhasil ditambahkan",
      data: komentarWithUser,
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
    const { id_recipe } = req.params;
    const { limit } = req.query;
    const limitKomentar = limit ? Number(limit) : undefined;

    const result = await komentarModel.findAll({
      limit: limitKomentar,
      where: {
        id_recipe: id_recipe,
      },
      attributes: [
        "id",
        "id_recipe",
        "deskripsi",
        "created_at",
        [
          komentarModel.sequelize.literal(
            `(SELECT name_user FROM users AS u WHERE u.id = komentar.id_user )`
          ),
          "name_user",
        ],
        [
          komentarModel.sequelize.literal(
            `(SELECT img FROM users AS u WHERE u.id = komentar.id_user )`
          ),
          "img_user",
        ],
        [
          komentarModel.sequelize.literal(
            `(SELECT img_url FROM users AS u WHERE u.id = komentar.id_user )`
          ),
          "img_user_url",
        ],
      ],

      order: [["created_at", "ASC"]],
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
