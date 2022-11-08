import type { NextApiRequest, NextApiResponse } from "next";
import Produto from "../../interfaces/Produto";

export default function handler(req: NextApiRequest, res: NextApiResponse<Produto[]>) {
  res.status(200).json([
    { id: 1, nome: "Caneta", preco: 4.5 },
    { id: 2, nome: "Caderno", preco: 20.3 },
    { id: 3, nome: "Borracha", preco: 6.45 },
    { id: 4, nome: "Tesoura", preco: 14.99 },
  ]);
}
