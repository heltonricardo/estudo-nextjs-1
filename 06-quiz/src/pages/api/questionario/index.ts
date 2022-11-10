import type { NextApiRequest, NextApiResponse } from "next";
import BancoQuestoes from "../bancoQuestoes";

type Data = number[];

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  res.status(200).json(BancoQuestoes.map((q) => q.id));
}
