import { useEffect, useState } from "react";

export default () => {
  const [questao, setQuestao] = useState("");

  useEffect(() => {
    fetch("http://localhost:3000/api/questao/1")
      .then((res) => res.json())
      .then(setQuestao);
  }, []);

  function renderRespostas() {
    return (
      <ul>
        {questao?.respostas &&
          questao.respostas.map((e, i) => <li key={i}>{e}</li>)}
      </ul>
    );
  }

  return (
    <div>
      <h1>Questão</h1>
      <div>
        <span>{questao?.enunciado}</span>
        {renderRespostas()}
      </div>
    </div>
  );
};
