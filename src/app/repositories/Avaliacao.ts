import { Repository, FindOptionsWhere } from 'typeorm';
import dataSource from '../../database/typeorm';
import { Avaliacao } from '../entities/Avaliacao';
import { IAvaliacao } from '../interfaces/avaliacao';
import { IAvaliacaoConsultaRepository } from '../interfaces/repositories/avaliacaoRepository';

export class AvaliacaoRepository implements IAvaliacaoConsultaRepository {
  private repository: Repository<Avaliacao> = dataSource.getRepository(Avaliacao);

  async save(data: IAvaliacao) {
    const agendamento = this.repository.create(data);
    return await this.repository.save(agendamento);
  }

  async findAll() {
    return await this.repository.find({ relations: ['consulta', 'exame', 'unidade',] });
  }

  async findById(id: number) {
    return await this.repository.findOne({
      where: { id_avaliacao: id },
      relations: ['consulta', 'exame', 'unidade',],
    });;
  }

  async findByQuery(
    query: FindOptionsWhere<IAvaliacao> | FindOptionsWhere<IAvaliacao>[],
  ): Promise<Avaliacao[]> {
    return await this.repository.find({ where: { ...query }, relations: ['consulta', 'exame', 'unidade',] });
  }

  async findByQueryOne(
    query: FindOptionsWhere<IAvaliacao> | FindOptionsWhere<IAvaliacao>[],
  ): Promise<Avaliacao | undefined> {
    const response = await this.repository.findOne({ where: { ...query }, relations: ['consulta', 'exame', 'unidade',] });
    return response
  }

  async update(id: number, data: Partial<IAvaliacao>) {
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
