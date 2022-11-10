import type { NextApiRequest, NextApiResponse } from "next";
import { embaralharVetor } from "../../../functions/arrays";
import BancoQuestoes from "../bancoQuestoes";

type Data = number[];

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  const ids = embaralharVetor(BancoQuestoes.map((q) => q.id));
  res.status(200).json(ids);
}
