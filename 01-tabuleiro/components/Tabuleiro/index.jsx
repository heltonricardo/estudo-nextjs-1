import styles from "./styles.module.css";

import Linha from "../Linha";

function montaTabuleiro(corAtualIsPreto = false) {
  const vet = [];
  for (let i = 0; i < 8; ++i) {
    vet.push(<Linha comecaComPreto={corAtualIsPreto} key={i} />);
    corAtualIsPreto = !corAtualIsPreto;
  }
  return vet;
}

export default ({ primeiraCorIsPreto = false }) => (
  <div className={styles.tabuleiro}>{montaTabuleiro(primeiraCorIsPreto)} </div>
);
