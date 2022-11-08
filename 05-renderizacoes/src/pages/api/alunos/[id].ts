import type { NextApiRequest, NextApiResponse } from "next";
import Aluno from "../../../interfaces/IAluno";

export default function handler(req: NextApiRequest, res: NextApiResponse<Aluno>) {
  const idReq = Number(req.query.id) || 0;

  res.status(200).json({
    id: idReq,
    nome: `Jose da Silva ${idReq}`,
    email: `josedasilva${idReq}@email.com`,
  });
}
