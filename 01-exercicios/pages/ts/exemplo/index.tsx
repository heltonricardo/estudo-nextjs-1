import Pessoa from "../../../components/Pessoa";

export default function Exemplo() {
  return (
    <div>
      <Pessoa nome="João" />
      <Pessoa nome="Maria" idade={20} />
    </div>
  );
}
