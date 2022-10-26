export default (req, res) => {
  res.status(200).json({
    parametrosRecebidos: req.query.dados,
  });
};
