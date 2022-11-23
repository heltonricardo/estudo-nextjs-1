const Filho = ({ funcao }) => (
  <>
    <p>* Saídas no console do navegador *</p>
    <h1>Filho</h1>
    <button onClick={funcao}>Falar com pai v1</button>
    <button onClick={(e) => funcao(e)}>Falar com pai v2</button>
    <button onClick={() => funcao()}>Falar com pai v3</button>
    <button onClick={() => funcao("Olá, pai!")}>Falar com pai v4</button>
  </>
);

export default Filho;
