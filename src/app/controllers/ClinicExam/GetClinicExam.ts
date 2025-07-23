
import { Request, Response } from 'express';
import { ClinicExamService } from "../../services/ClinicExam";

async function getClinicExam(req: Request, res: Response) {
  try {
    const queries = req.query
    const { id } = req.params
    const getService = new ClinicExamService();
    let results: any = null

    const objectFilterUser: any = {};

    if (queries) objectFilterUser.queries = queries
    if (id) objectFilterUser.id = parseInt(id)

    if (Object.keys(objectFilterUser).length > 0) {
      results = await getService.getExams(objectFilterUser)
    }
    else {
      results = await getService.getExams({})
    }

    return res.json({ results });
  } catch (err) {

    return res.status(500).json({ message: err.message });
  }
}

export default getClinicExam;
