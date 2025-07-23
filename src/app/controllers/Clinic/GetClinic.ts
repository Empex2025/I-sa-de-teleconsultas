
import { Request, Response } from 'express';
import { ClinicService } from "../../services/Clinic";

async function getClinic(req: Request, res: Response) {
  try {
    const queries = req.query
    const { id } = req.params
    const getService = new ClinicService();
    let results: any = null

    const objectFilterUser: any = {};

    if (queries) objectFilterUser.queries = queries
    if (id) objectFilterUser.id = parseInt(id)

    if (Object.keys(objectFilterUser).length > 0) {
      results = await getService.getClinics(objectFilterUser)
    }
    else {
      results = await getService.getClinics({})
    }

    return res.json({ results });
  } catch (err) {

    return res.status(500).json({ message: err.message });
  }
}

export default getClinic;
