import { useEffect, useState } from "react";
import DisplayNumero from "../../../components/DisplayNumero";
import gerarNumeros from "../../../functions/mega-sena";
import styles from "./styles.module.scss";

export default () => {
  const [lista1, setLista1] = useState([]);
  const [lista2, setLista2] = useState([]);
  const [valor, setValor] = useState(8);

  useEffect(() => {
    setLista1(gerarNumeros());
    setLista2(gerarNumeros(valor));
  }, []);

  useEffect(() => {
    setLista2(gerarNumeros(valor));
  }, [valor]);

  return (
    <div className={styles.pagina}>
      <div className={styles.exercicio}>
        <h1 className={styles.titulo}>Ex1: Gerar 6 números diferentes</h1>
        <div className={styles.resultado}>
          {lista1.map((e) => (
            <DisplayNumero key={e} valor={e} />
          ))}
        </div>
        <button
          onClick={() => setLista1(gerarNumeros())}
          className={styles.botao}
        >
          Gerar
        </button>
      </div>
      <div className={styles.exercicio}>
        <h1 className={styles.titulo}>Ex1: Gerar N números diferentes</h1>
        <div className={styles.resultado}>
          {lista2.map((e) => (
            <DisplayNumero key={e} valor={e} />
          ))}
        </div>
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
          <button
            onClick={() => setLista2(gerarNumeros(valor))}
            className={styles.botao}
          >
            Gerar
          </button>
        </div>
      </div>
    </div>
  );
};
