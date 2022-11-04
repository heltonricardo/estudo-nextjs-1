import SomentePar from "../../components/SomentePar";

export default () => (
  <>
    {Array.from(Array(13).keys()).map((n) => (
      <SomentePar n={n} key={n} />
    ))}
  </>
);
