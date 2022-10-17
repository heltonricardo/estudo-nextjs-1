const lista = ["Ana", "Bia", "Carlos", "Dani", "Elen"];

export default () => (
  <ul>
    {lista.map((nome, i) => (
      <li key={i}>{nome}</li>
    ))}
  </ul>
);
