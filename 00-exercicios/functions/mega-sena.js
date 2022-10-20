export default function gerarNumeros(tamanho = 6) {
  const lista = [];
  while (lista.length < tamanho) {
    const r = Math.floor(Math.random() * 60) + 1;
    if (lista.indexOf(r) === -1) lista.push(r);
  }
  return lista.sort((a, b) => a - b);
}
