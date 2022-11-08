import IAluno from "../../interfaces/IAluno";

interface Props {
  aluno: IAluno;
}

export default function Id({ aluno }: Props) {
  return (
    <div>
      <h1>Detalhes do Aluno</h1>
      <ul>
        <li>Id: {aluno.id}</li>
        <li>Nome: {aluno.nome}</li>
        <li>E-mail: {aluno.email}</li>
      </ul>
    </div>
  );
}

export async function getStaticProps(context: { params: { id: number } }) {
  const url = `http://localhost:3000/api/alunos/${context.params.id}`;
  const resp = await fetch(url);
  const aluno = await resp.json();
  return { props: { aluno } };
}

export function getStaticPaths() {
  return {
    paths: [
      { params: { id: "1" } },
      { params: { id: "2" } },
      { params: { id: "3" } },
      { params: { id: "4" } },
      { params: { id: "5" } },
    ],
    fallback: false,
  };
}

/* Nesse caso, ao exportar a função getStaticProps, teremos um erro pois o next
 * não saberá quais páginas deve gerar no momento de build, pois usando [slug] é
 * possível inserir qualquer valor na url. Então deve-se informar quais serão
 * as urls que devem ser produzidas no momento da compilação usando outro
 * método, com nome getStaticPaths.
 *
 * O atributo paths é um array que representa os parâmetros das páginas que
 * serão geradas. O atrobuto fallback aceita um valor booleano: false - ao
 * tentar acessar uma página que não foi gerada, o cliente receberá a página de
 * erro 404.
 */
