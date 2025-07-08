import { Repository, FindOptionsWhere } from 'typeorm';
import dataSource from '../../database/typeorm';
import { ClinicExam } from '../entities';
import { IClinicExam } from '../interfaces/clinic';
import { IClinicExamRepository } from '../interfaces/repositories/clinicRepository';

export class ClinicExamRepository implements IClinicExamRepository {
  private repository: Repository<ClinicExam> = dataSource.getRepository(ClinicExam);

  async save(data: IClinicExam) {
    const clinic = this.repository.create(data);
    return await this.repository.save(clinic);
  }

  async findAll() {
    return await this.repository.find({ relations: ['clinica'] });
  }

  async findById(id: number) {
    return await this.repository.findOne({ where: { id_exame: id }, relations: ['clinica'] });
  }

  async findByQuery(
    query: FindOptionsWhere<IClinicExam> | FindOptionsWhere<IClinicExam>[],
  ): Promise<ClinicExam[]> {
    return await this.repository.find({ where: { ...query }, relations: ['clinica'] });
  }

  async findByQueryOne(
    query: FindOptionsWhere<IClinicExam> | FindOptionsWhere<IClinicExam>[],
  ): Promise<ClinicExam | undefined> {
    return await this.repository.findOne({ where: { ...query }, relations: ['clinica'] });
  }

  async update(id: number, data: Partial<IClinicExam>) {
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

