import type { NextApiRequest, NextApiResponse } from "next";
import numeroAleatorio from "../../functions/numeroAleatorio";
import Produto from "../../interfaces/Produto";

export default function handler(req: NextApiRequest, res: NextApiResponse<Produto[]>) {
  res.status(200).json([
    { id: numeroAleatorio(10, 19), nome: "Caneta", preco: 4.5 },
    { id: numeroAleatorio(20, 29), nome: "Caderno", preco: 20.3 },
    { id: numeroAleatorio(30, 39), nome: "Borracha", preco: 6.45 },
    { id: numeroAleatorio(40, 49), nome: "Tesoura", preco: 14.99 },
  ]);
}
