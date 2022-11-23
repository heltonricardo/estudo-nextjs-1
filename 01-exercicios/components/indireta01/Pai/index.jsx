import Filho from "../Filho";

function falarComPai(evento) {
  evento && console.log(evento);
  console.log("Falou com o pai!");
}

const Pai = () => (
  <>
    <Filho funcao={falarComPai} />
  </>
);

export default Pai;
