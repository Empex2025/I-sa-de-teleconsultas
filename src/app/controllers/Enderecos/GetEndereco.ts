
import { Request, Response } from 'express';
import { EnderecoService } from "../../services/Enderecos";

async function getEndereco(req: Request, res: Response) {
  try {
    const queries = req.query
    const { id } = req.params
    const getService = new EnderecoService();
    let results: any = null

    const objectFilterUser: any = {};

    if (queries) objectFilterUser.queries = queries
    if (id) objectFilterUser.id = parseInt(id)

    if (Object.keys(objectFilterUser).length > 0) {
      results = await getService.getEnderecos(objectFilterUser)
    }
    else {
      results = await getService.getEnderecos({})
    }

    return res.json({ results });
  } catch (err) {

    return res.status(500).json({ message: err.message });
  }
}

export default getEndereco;
