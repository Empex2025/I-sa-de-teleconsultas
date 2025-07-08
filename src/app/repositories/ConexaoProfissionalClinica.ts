import { Repository, FindOptionsWhere } from 'typeorm';
import dataSource from '../../database/typeorm';
import { ConexaoProfissionalClinica } from '../entities/ConexaoProfissionalClinica';
import { IConexaoProfissionalClinica } from '../interfaces/conexaoProfissionalClinic';
import { IConexaoProfissionalClinicaConsultaRepository } from '../interfaces/repositories/ConexaoProfissionalClinicaRepository';

export class ConexaoProfissionalClinicaRepository implements IConexaoProfissionalClinicaConsultaRepository {
  private repository: Repository<ConexaoProfissionalClinica> = dataSource.getRepository(ConexaoProfissionalClinica);

  async save(data: IConexaoProfissionalClinica) {
    const agendamento = this.repository.create(data);
    return await this.repository.save(agendamento);
  }

  async findAll() {
    return await this.repository.find({ relations: ['clinica', 'profissional'] });
  }

  async findById(id: number) {
    return await this.repository.findOne({
      where: { id_conexao: id },
      relations: ['clinica', 'profissional'],
    });;
  }

  async findByQuery(
    query: FindOptionsWhere<IConexaoProfissionalClinica> | FindOptionsWhere<IConexaoProfissionalClinica>[],
  ): Promise<ConexaoProfissionalClinica[]> {
    return await this.repository.find({ where: { ...query }, relations: ['clinica', 'profissional'] });
  }

  async findByQueryOne(
    query: FindOptionsWhere<IConexaoProfissionalClinica> | FindOptionsWhere<IConexaoProfissionalClinica>[],
  ): Promise<ConexaoProfissionalClinica | undefined> {
    const response = await this.repository.findOne({ where: { ...query }, relations: ['clinica', 'profissional'] });
    return response
  }

  async update(id: number, data: Partial<IConexaoProfissionalClinica>) {
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
