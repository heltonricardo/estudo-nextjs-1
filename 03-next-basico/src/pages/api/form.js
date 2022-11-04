const usuarios = [];

export default function Form(req, res) {
  req.method === "GET" && get(res);
  req.method === "POST" && post(req, res);
  res.status(405).send();
}

function get(res) {
  res.status(200).json(usuarios);
}

function post(req, res) {
  const usuario = JSON.parse(req.body);
  usuarios.push(usuario);
  res.status(200).json(usuario);
}
