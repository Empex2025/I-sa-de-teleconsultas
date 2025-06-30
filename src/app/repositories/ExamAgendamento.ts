import { Repository, FindOptionsWhere } from 'typeorm';
import dataSource from '../../database/typeorm';
import { ExamAgendamento } from '../entities';
import { IExamAgendamento } from '../interfaces/exam';
import { IExamAgendamentoRepository } from '../interfaces/repositories/examRepository';

export class ExamAgendamentoRepository implements IExamAgendamentoRepository {
  private repository: Repository<ExamAgendamento> = dataSource.getRepository(ExamAgendamento);

  async save(data: IExamAgendamento) {
    const clinic = this.repository.create(data);
    return await this.repository.save(clinic);
  }

  async findAll() {
    return await this.repository.find();
  }

  async findById(id: number) {
    return await this.repository.findOneBy({ id_exame: id });
  }

  async findByQuery(
    query: FindOptionsWhere<IExamAgendamento> | FindOptionsWhere<IExamAgendamento>[],
  ): Promise<ExamAgendamento[]> {
    return await this.repository.findBy(query);
  }

  async findByQueryOne(
    query: FindOptionsWhere<IExamAgendamento> | FindOptionsWhere<IExamAgendamento>[],
  ): Promise<ExamAgendamento | undefined> {
    return await this.repository.findOneBy(query);
  }

  async update(id: number, data: Partial<IExamAgendamento>) {
    const clinic = await this.findById(id);
    if (!clinic) return null;
    Object.assign(clinic, data);
    return await this.repository.save(clinic);
  }

  async delete(id: number) {
    const clinic = await this.findById(id);
    if (!clinic) return null;
    await this.repository.remove(clinic);
    return null;
  }
}

