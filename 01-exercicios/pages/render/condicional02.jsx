import If from "../../components/If";

const isPar = (n) => n % 2 === 0;
const isImpar = (n) => n % 2 !== 0;

export default function Condicional02() {
  return (
    <>
      {[...Array(10).keys()]
        .map((n) => n + 1)
        .map((n) => (
          <>
            <If key={n} condicao={isPar(n)}>
              <h1>{n} é par!</h1>
            </If>
            <If key={n} condicao={isImpar(n)}>
              <h1>{n} é ímpar!</h1>
            </If>
          </>
        ))}
    </>
  );
}
