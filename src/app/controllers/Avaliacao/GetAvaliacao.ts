
import { Request, Response } from 'express';
import { AvaliacaoService } from "../../services/Avaliacao";

async function getAvaliacao(req: Request, res: Response) {
  try {
    const queries = req.query
    const { id } = req.params
    const getService = new AvaliacaoService();
    let results: any = null

    const objectFilterUser: any = {};

    if (queries) objectFilterUser.queries = queries
    if (id) objectFilterUser.id = parseInt(id)

    if (Object.keys(objectFilterUser).length > 0) {
      results = await getService.getAvaliacao(objectFilterUser)
    }
    else {
      results = await getService.getAvaliacao({})
    }

    return res.json({ results });
  } catch (err) {

    return res.status(500).json({ message: err.message });
  }
}

export default getAvaliacao;
