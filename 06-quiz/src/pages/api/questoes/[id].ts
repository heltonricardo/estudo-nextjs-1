import type { NextApiRequest, NextApiResponse } from "next";
import QuestaoModel from "../../../models/questao";
import BancoQuestoes from "../bancoQuestoes";

type Data = QuestaoModel;

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  res.status(200).json(BancoQuestoes[0]);
}
