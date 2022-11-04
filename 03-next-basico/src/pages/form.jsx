import Link from "next/link";
import { useState } from "react";

export default function Form() {
  const url = "/api/form";
  const [nome, setNome] = useState("");
  const [idade, setIdade] = useState("");
  const [usuarios, setUsuarios] = useState([]);

  async function salvarUsuario() {
    await fetch(url, { method: "POST", body: JSON.stringify({ nome, idade }) });
    fetch(url)
      .then((d) => d.json())
      .then(setUsuarios);
    setNome("");
    setIdade(0);
  }

  const renderizarUsuarios = () =>
    usuarios.map(({ nome, idade }, i) => (
      <li key={i}>
        {nome} tem idade {idade}
      </li>
    ));

  return (
    <div>
      <h1>Integração com API</h1>
      <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} />
      <input type="number" value={idade} onChange={(e) => setIdade(e.target.value)} />
      <button onClick={salvarUsuario}>Salvar Usuário</button>
      <ul>{renderizarUsuarios()}</ul>
      <Link href="/">Voltar</Link>
    </div>
  );
}
