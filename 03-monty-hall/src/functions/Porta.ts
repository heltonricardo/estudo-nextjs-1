import PortaModel from "../model/PortaModel";

export function criarPortas(qnt: number, premiada: number): PortaModel[] {
  return Array.from({ length: qnt }, (_, i) => {
    const numero = i + 1;
    const temPresente = numero === premiada;
    return new PortaModel(numero, temPresente);
  });
}

export function atualizarPortas(portas: PortaModel[], portaModificada: PortaModel): PortaModel[] {
  return portas.map((portaAtual) =>
    portaAtual.numero === portaModificada.numero
      ? portaModificada
      : portaModificada.isAberta
      ? portaAtual
      : portaAtual.RemoverSelecao()
  );
}
