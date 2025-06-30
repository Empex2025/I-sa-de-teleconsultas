import { Repository, FindOptionsWhere } from 'typeorm';
import dataSource from '../../database/typeorm';
import { AgendamentoConsulta } from '../entities/AgendamentoConsulta';
import { IAgendamentoConsulta } from '../interfaces/agendamento';
import { AGENDAMENTO_CONSULTA_FIELDS } from '../utils/listOfFields';
import { filterProps } from '../utils/filterProps';

export class AgendamentoConsultaRepository {
  private repository: Repository<AgendamentoConsulta> = dataSource.getRepository(AgendamentoConsulta);

  async save(data: IAgendamentoConsulta) {
    const dataFilter = filterProps(data, [...AGENDAMENTO_CONSULTA_FIELDS] as (keyof IAgendamentoConsulta)[]);

    if (
      !dataFilter.comentarios ||
      !dataFilter.data_hora_fim ||
      !dataFilter.data_hora_inicio ||
      !dataFilter.id_clinica ||
      !dataFilter.id_consulta ||
      !dataFilter.id_usuario_paciente ||
      !dataFilter.id_usuario_profissional ||
      !dataFilter.link_sala ||
      !dataFilter.motivo ||
      !dataFilter.tipo_consulta
    ) {
      throw new Error('Campos obrigatórios ausentes: user_id');
    }

    const agendamento = this.repository.create(dataFilter);

    return await this.repository.save(agendamento);
  }

  async find() {
    return await this.repository.find();
  }

  async findById(id: number) {
    return await this.repository.findOneBy({ id_consulta: id });
  }

  async update(id: number, data: Partial<IAgendamentoConsulta>) {
    const dataFilter = filterProps(data, [...AGENDAMENTO_CONSULTA_FIELDS] as (keyof IAgendamentoConsulta)[]);
    const agendamento = await this.findById(id);
    if (!agendamento) return null;
    Object.assign(agendamento, dataFilter);
    return await this.repository.save(agendamento);
  }

  async delete(id: number) {
    const agendamento = await this.findById(id);
    if (!agendamento) return null;
    await this.repository.remove(agendamento);
    return null;
  }
}
