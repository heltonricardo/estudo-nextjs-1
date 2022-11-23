import { useEffect, useState } from "react";
import DisplayNumero from "../../../components/DisplayNumero";
import gerarNumeros from "../../../functions/mega-sena";
import styles from "./styles.module.scss";

export default function MegaSena() {
  const [lista1, setLista1] = useState([]);
  const [lista2, setLista2] = useState([]);
  const [valor, setValor] = useState(8);

  useEffect(() => {
    setLista1(gerarNumeros());
  }, []);
  
  useEffect(() => {
    setLista2(gerarNumeros(valor));
  }, [valor]);

  const renderLista1 = () => lista1.map((e) => <DisplayNumero key={e} valor={e} />);

  const renderLista2 = () => lista2.map((e) => <DisplayNumero key={e} valor={e} />);

  return (
    <div className={styles.pagina}>
      <div className={styles.exercicio}>
        <h1 className={styles.titulo}>Ex1: Gerar 6 números diferentes</h1>
        <div className={styles.resultado}>{renderLista1()}</div>
        <button onClick={() => setLista1(gerarNumeros())} className={styles.botao}>
          Gerar
        </button>
      </div>
      <div className={styles.exercicio}>
        <h1 className={styles.titulo}>Ex2: Gerar N números diferentes</h1>
        <div className={styles.resultado}>{renderLista2()}</div>
        <div>
          <span className={styles.rotulo}>N:</span>
          <input
            min="2"
            max="60"
            className={styles.entrada}
            type="number"
            value={valor}
            onChange={(e) => setValor(e.target.value)}
          />
          <button onClick={() => setLista2(gerarNumeros(valor))} className={styles.botao}>
            Gerar
          </button>
        </div>
      </div>
    </div>
  );
}
