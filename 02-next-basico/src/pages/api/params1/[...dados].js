export default function Dados(req, res) {
  res.status(200).json({
    parametrosRecebidos: req.query.dados,
  });
}
