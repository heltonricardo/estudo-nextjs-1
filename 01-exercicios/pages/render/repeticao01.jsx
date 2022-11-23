const lista = ["Ana", "Bia", "Carlos", "Dani", "Elen"];

export default function Repeticao01() {
  return (
    <ul>
      {lista.map((nome, i) => (
        <li key={i}>{nome}</li>
      ))}
    </ul>
  );
}
