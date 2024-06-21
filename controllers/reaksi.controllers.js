const { reaksi: reaksiModel } = require("../models");

const createReaksi = async (req, res, next) => {
  const { nama_reaksi, id_recipe } = req.body;
  console.log(req.user.id);

  //   const reaksi = await reaksiModel.findAll({});

  await reaksiModel
    .create({
      nama_reaksi: nama_reaksi,
      id_user: req.user.id,
      id_recipe: id_recipe,
    })
    .then((dataResponse) => {
      return res.status(201).send({
        message: "reaksi berhasil di tambahkan",
        data: dataResponse,
      });
    });
};

const lookReaksi = async (req, res, next) => {
  const { id_reaksi } = req.query;

  const reaksi = await reaksiModel.findAll({
    where: id_reaksi ? { id: id_reaksi } : {},
    attributes: [
      "id",
      "nama_reaksi",
      "id_user",
      "id_recipe",
      [
        reaksiModel.sequelize.literal(
          `(SELECT name_user FROM users AS u WHERE u.id = reaksi.id_user )`
        ),
        "name_user",
      ],
    ],
  });

  return res.send({
    message: "success",
    data: reaksi,
  });
};

module.exports = {
  createReaksi,
  lookReaksi,
};
