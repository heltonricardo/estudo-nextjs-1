import styles from "./styles.module.css";

import Quadrado from "../Quadrado";

function montaLinha(corAtualIsPreto = false) {
  const vet = [];
  for (let i = 0; i < 8; ++i) {
    vet.push(<Quadrado preto={corAtualIsPreto} key={i} />);
    corAtualIsPreto = !corAtualIsPreto;
  }
  return vet;
}

export default ({ comecaComPreto = false }) => (
  <div className={styles.linha}>{montaLinha(comecaComPreto)} </div>
);
