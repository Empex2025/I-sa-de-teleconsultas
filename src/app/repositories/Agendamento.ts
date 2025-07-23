import { Repository, FindOptionsWhere } from 'typeorm';
import dataSource from '../../database/typeorm';
import { AgendamentoConsulta } from '../entities/AgendamentoConsulta';
import { IAgendamentoConsulta } from '../interfaces/agendamento';
import { IAgendamentoConsultaRepository } from '../interfaces/repositories/agendamentoRepository';

export class AgendamentoConsultaRepository implements IAgendamentoConsultaRepository {
  private repository: Repository<AgendamentoConsulta> = dataSource.getRepository(AgendamentoConsulta);

  async save(data: IAgendamentoConsulta) {
    const agendamento = this.repository.create(data);
    return await this.repository.save(agendamento);
  }

  async findAll() {
    return await this.repository.find({ relations: ['clinica',] });
  }

  async findById(id: number) {
    return await this.repository.findOne({
      where: { id_consulta: id },
      relations: ['clinica'],
    });;
  }

  async findByQuery(
    query: FindOptionsWhere<IAgendamentoConsulta> | FindOptionsWhere<IAgendamentoConsulta>[],
  ): Promise<AgendamentoConsulta[]> {
    return await this.repository.find({ where: { ...query }, relations: ['clinica',] });
  }

  async findByQueryOne(
    query: FindOptionsWhere<IAgendamentoConsulta> | FindOptionsWhere<IAgendamentoConsulta>[],
  ): Promise<AgendamentoConsulta | undefined> {
    const response = await this.repository.findOne({ where: { ...query }, relations: ['clinica'] });
    return response
  }

  async update(id: number, data: Partial<IAgendamentoConsulta>) {
    const agendamento = await this.findById(id);
    if (!agendamento) return null;
    Object.assign(agendamento, data);
    return await this.repository.save(agendamento);
  }

  async delete(id: number) {
    const agendamento = await this.findById(id);
    if (!agendamento) return null;
    await this.repository.remove(agendamento);
    return null;
  }
}
