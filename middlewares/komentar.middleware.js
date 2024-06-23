const komentarCreatevalidation = (req, res, next) => {
  try {
    const { id_user, id_recipe, deskripsi } = req.body;

    if (!id_user) {
      throw new Error(`id_user wajib di isi`);
    }

    if (!id_recipe) {
      throw new Error(`id_user wajib di isi`);
    }

    if (!deskripsi) {
      throw new Error(`id_user wajib di isi`);
    }

    next();
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: error.message });
    next(error.message);
  }
};

module.exports = {
  komentarCreatevalidation,
};
