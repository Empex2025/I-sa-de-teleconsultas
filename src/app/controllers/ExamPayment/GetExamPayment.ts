
import { Request, Response } from 'express';
import { ExamAgendamentoService } from "../../services/ExamAgendamento";

async function getExamPayment(req: Request, res: Response) {
  try {
    const queries = req.query
    const { id } = req.params
    const getService = new ExamAgendamentoService();
    let results: any = null

    const objectFilterUser: any = {};

    if (queries) objectFilterUser.queries = queries
    if (id) objectFilterUser.id = parseInt(id)

    if (Object.keys(objectFilterUser).length > 0) {
      results = await getService.getExamAgendamento(objectFilterUser)
    }
    else {
      results = await getService.getExamAgendamento({})
    }

    return res.json({ results });
  } catch (err) {

    return res.status(500).json({ message: err.message });
  }
}

export default getExamPayment;
