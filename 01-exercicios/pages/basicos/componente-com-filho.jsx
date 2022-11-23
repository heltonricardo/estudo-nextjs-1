import ItemLista from "../../components/ItemLista";
import Lista from "../../components/Lista";

export default function ComponenteComFilho() {
  return (
    <Lista>
      <ItemLista>Item #1</ItemLista>
      <ItemLista>Item #2</ItemLista>
      <ItemLista>Item #3</ItemLista>
      <ItemLista>Item #4</ItemLista>
    </Lista>
  );
}
