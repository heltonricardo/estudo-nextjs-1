export default function Id(req, res) {
  req.method !== "GET" && res.status(405).send();
  res.status(200).json({
    id: req.query.id,
    enunciado: "Cor favorita?",
    respostas: ["Vermelha", "Verde", "Azul"],
  });
}
