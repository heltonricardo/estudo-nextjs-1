import Filho from "../Filho";

function falarComPai(evento) {
  evento && console.log(evento);
  console.log("Falou com o pai!");
}

export default () => (
  <>
    <Filho funcao={falarComPai} />
  </>
);
