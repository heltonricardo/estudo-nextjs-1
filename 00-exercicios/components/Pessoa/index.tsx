interface Props {
  nome: string;
  idade?: number;
}

export default ({ nome, idade }: Props) => (
  <div>
    <h1>Nome: {nome}</h1>
    <h2>Idade: {idade ?? "Não informada"}</h2>
  </div>
);
