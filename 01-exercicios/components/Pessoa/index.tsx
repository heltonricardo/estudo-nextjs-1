interface Props {
  nome: string;
  idade?: number;
}

const Pessoa = ({ nome, idade }: Props) => (
  <div>
    <h1>Nome: {nome}</h1>
    <h2>Idade: {idade ?? "Não informada"}</h2>
  </div>
);

export default Pessoa;
