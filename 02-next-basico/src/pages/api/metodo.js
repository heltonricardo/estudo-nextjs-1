export default function Metodo(req, res) {
  res.status(200).json(req.method === "GET" ? { metodo: "Get!" } : { metodoUsado: req.method });
}
