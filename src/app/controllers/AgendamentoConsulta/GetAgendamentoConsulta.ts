
import { Request, Response } from 'express';
import { AgendamentosConsultaService } from "../../services/Agendamento";

async function getAgendamentoConsulta(req: Request, res: Response) {
  try {
    const queries = req.query
    const { id } = req.params
    const getService = new AgendamentosConsultaService();
    let results: any = null

    const objectFilterUser: any = {};

    if (queries) objectFilterUser.queries = queries
    if (id) objectFilterUser.id = parseInt(id)

    if (Object.keys(objectFilterUser).length > 0) {
      results = await getService.getAgendamentosConsulta(objectFilterUser)
    }
    else {
      results = await getService.getAgendamentosConsulta({})
    }

    return res.json({ results });
  } catch (err) {

    return res.status(500).json({ message: err.message });
  }
}

export default getAgendamentoConsulta;
