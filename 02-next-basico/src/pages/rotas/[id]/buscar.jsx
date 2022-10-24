import { useRouter } from "next/router";

export default () => {
  const router = useRouter();
  const id = router.query.id

  return (
    <div>
      Rotas {">"} {id} {">"} Buscar
    </div>
  );
};
