const ValidateTransacao = (req, res, next) => {
  const { valor, descricao, tipo } = req.body;

  if (!valor || typeof valor !== "string") {
    return res.status(400).json({
      msg: "Valide seus dados",
    });
  }

  if (!descricao || typeof descricao !== "string") {
    return res.status(400).json({
      msg: "Valide seus dados",
    });
  }

  if (!tipo || typeof tipo !== "string") {
    return res.status(400).json({
      msg: "Valide seus dados",
    });
  }

  return next();
};

module.exports = ValidateTransacao;
