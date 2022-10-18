import Filho from "../Filho";

export default (props) => (
  <div>
    <Filho {...props} nome="Ana" familia="Silva" />
    <Filho nome="Bia" {...props} familia="Santos" />
    <Filho nome="Carlos" familia="Costa" {...props} />
  </div>
);
