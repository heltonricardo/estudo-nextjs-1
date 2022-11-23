import Filho from "../Filho";

const Pai = (props) => (
  <div>
    <Filho {...props} nome="Ana" familia="Silva" />
    <Filho nome="Bia" {...props} familia="Santos" />
    <Filho nome="Carlos" familia="Costa" {...props} />
  </div>
);

export default Pai;
