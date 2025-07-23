
import { Request, Response } from 'express';
import { ClinicPromocaoService } from "../../services/ClinicPromocao";

async function getClinicPromocaoService(req: Request, res: Response) {
  try {
    const queries = req.query
    const { id } = req.params
    const getService = new ClinicPromocaoService();
    let results: any = null

    const objectFilterUser: any = {};

    if (queries) objectFilterUser.queries = queries
    if (id) objectFilterUser.id = parseInt(id)

    if (Object.keys(objectFilterUser).length > 0) {
      results = await getService.getClinicPromocao(objectFilterUser)
    }
    else {
      results = await getService.getClinicPromocao({})
    }

    return res.json({ results });
  } catch (err) {

    return res.status(500).json({ message: err.message });
  }
}

export default getClinicPromocaoService;
