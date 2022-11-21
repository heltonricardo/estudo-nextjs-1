import Link from "next/link";
import { useEffect, useState } from "react";
import BASE_URL from "../constants/envs";

export default function Questao() {
  const [questao, setQuestao] = useState("");

  useEffect(() => {
    fetch(`${BASE_URL}/api/questao/1`)
      .then((res) => res.json())
      .then(setQuestao);
  }, []);

  function renderRespostas() {
    return <ul>{questao?.respostas && questao.respostas.map((e, i) => <li key={i}>{e}</li>)}</ul>;
  }

  return (
    <div>
      <h1>Questão</h1>
      <div>
        <span>
          {questao?.id}) {questao?.enunciado}
        </span>
        {renderRespostas()}
        <Link href="/">Voltar</Link>
      </div>
    </div>
  );
}
