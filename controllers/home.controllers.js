const home = async (req, res, next) => {
  return res.send({
    message: "success",
  });
};

module.exports = {
  home,
};
