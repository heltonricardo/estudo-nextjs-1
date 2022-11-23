const acao1 = () => console.log("acao1");
const acao5 = (evento) => console.log(evento);

export default function Botao() {
  const acao2 = () => console.log("acao2");
  return (
    <>
      <p>* Saídas no console do navegador *</p>
      <button type="button" onClick={acao1}>
        Click #01
      </button>
      <button type="button" onClick={acao2}>
        Click #02
      </button>
      <button
        type="button"
        onClick={function acao3() {
          console.log("acao3");
        }}
      >
        Click #03
      </button>
      <button type="button" onClick={() => console.log("acao4")}>
        Click #04
      </button>
      <button type="button" onClick={acao5}>
        Click #05
      </button>
      <button type="button" onClick={(e) => acao5(e.altKey)}>
        Click #05 v2
      </button>
      <div>
        <input type="text" onChange={(e) => console.log(e.target.value || "VAZIO")} />
      </div>
    </>
  );
}
