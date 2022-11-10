import type { NextApiRequest, NextApiResponse } from "next";
import IQuestao from "../../../interfaces/questao";
import BancoQuestoes from "../bancoQuestoes";

type Data = IQuestao;

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  const id = Number(req.query.id);
  const questao = BancoQuestoes.find((q) => q.id === id);
  questao && res.status(200).json(questao.embaralharRespostas().paraObjeto());
  res.status(404).end();
}
