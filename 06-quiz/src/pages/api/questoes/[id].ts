import type { NextApiRequest, NextApiResponse } from "next";
import IQuestao from "../../../interfaces/questao";
import BancoQuestoes from "../bancoQuestoes";

type Data = IQuestao;

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  res.status(200).json(BancoQuestoes[0].paraObjeto());
}
