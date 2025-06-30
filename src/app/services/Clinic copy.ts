import { Repository, FindOptionsWhere } from 'typeorm';
import dataSource from '../../database/typeorm';
import { Clinic } from '../entities/Clinic';
import { IClinic } from '../interfaces/clinic';
import { CLINIC_FIELDS } from '../utils/listOfFields';
import { filterProps } from '../utils/filterProps';

export class ClinicRepository {
  private repository: Repository<Clinic> = dataSource.getRepository(Clinic);

  async save(data: IClinic) {
    const dataFilter = filterProps(data, [...CLINIC_FIELDS] as (keyof IClinic)[]);
    return await this.repository.save(this.repository.create(dataFilter));
  }

  async find() {
    return await this.repository.find();
  }

  async findById(id: number) {
    return await this.repository.findOneBy({ id_clinica: id });
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
