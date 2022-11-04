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

export default function Tabuleiro({ primeiraCorIsPreto = false }) {
  return (
    <div className={styles.mesa}>
      <div className={styles.tabuleiro}>{montaTabuleiro(primeiraCorIsPreto)}</div>
    </div>
  );
}
