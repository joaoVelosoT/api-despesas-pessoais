const validateUser = (req, res, next) => {
  const { nome, email, senha } = req.body;

  if (!nome && typeof nome !== "string") {
    return res.status(400).json({
      msg: "Campos invalidos",
    });
  }

  if (!email && typeof email !== "string") {
    return res.status(400).json({
      msg: "Campos invalidos",
    });
  }

  if (!senha && typeof senha !== "string") {
    return res.status(400).json({
      msg: "Campos invalidos",
    });
  }

  if (!nome || !email || !senha) {
    return res.status(400).json({
      msg: "Valide seus dados",
    });
  }

  return next();
};

module.exports = validateUser;
