const geraLista = (qnt = 10) => {
  const lista = [];
  for (let i = 1; i <= qnt; ++i) {
    lista.push(<p>{i}</p>);
  }
  return lista;
};

export default () => <div>{geraLista()}</div>;
