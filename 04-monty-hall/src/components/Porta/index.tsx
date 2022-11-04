import PortaModel from "../../model/PortaModel";
import Presente from "../Presente";
import styles from "./styles.module.scss";

interface Props {
  value: PortaModel;
  onChange: (novaPorta: PortaModel) => void;
}

export default function Porta({ value: porta, onChange: evento }: Props) {
  const selecao = porta.isSelecionada && !porta.isAberta ? styles.selecao : "";

  function abrirPorta(e: React.MouseEvent<HTMLElement>) {
    e.stopPropagation();
    evento(porta.abrir());
  }

  function renderizarPorta() {
    return (
      <div className={styles.porta}>
        <div className={styles.numero}>{porta.numero}</div>
        <div className={styles.macaneta} onClick={abrirPorta}></div>
      </div>
    );
  }

  return (
    <div className={styles.area} onClick={() => evento(porta.alternarSelecao())}>
      <div className={`${styles.batente} ${selecao}`}>
        {porta.isFechada ? renderizarPorta() : porta.temPresente && <Presente />}
      </div>
      <div className={styles.chao}></div>
    </div>
  );
}
