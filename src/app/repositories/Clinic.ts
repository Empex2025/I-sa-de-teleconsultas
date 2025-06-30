import { Repository, FindOptionsWhere } from 'typeorm';
import dataSource from '../../database/typeorm';
import { Clinic, } from '../entities/Clinic';
import { IClinic, } from '../interfaces/clinic';
import { IClinicRepository } from '../interfaces/repositories/clinicRepository';

export class ClinicRepository implements IClinicRepository {
  private repository: Repository<Clinic> = dataSource.getRepository(Clinic);

  async save(data: IClinic) {
    const clinic = this.repository.create(data);
    return await this.repository.save(clinic);
  }

  async findAll() {
    return await this.repository.find();
  }

  async findById(id: number) {
    return await this.repository.findOneBy({ id_clinica: id });
  }

  async findByQuery(
    query: FindOptionsWhere<IClinic> | FindOptionsWhere<IClinic>[],
  ): Promise<Clinic[]> {
    return await this.repository.findBy(query);
  }

  async findByQueryOne(
    query: FindOptionsWhere<IClinic> | FindOptionsWhere<IClinic>[],
  ): Promise<Clinic | undefined> {
    return await this.repository.findOneBy(query);
  }

  async update(id: number, data: Partial<IClinic>) {
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

