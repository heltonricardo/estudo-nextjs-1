import SomentePar from "../../components/SomentePar";

export default function Condicional01() {
  return (
    <>
      {Array.from(Array(13).keys()).map((n) => (
        <SomentePar n={n} key={n} />
      ))}
    </>
  );
}
