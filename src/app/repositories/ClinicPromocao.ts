import { Repository, FindOptionsWhere } from 'typeorm';
import dataSource from '../../database/typeorm';
import { ClinicPromotion } from '../entities';
import { IClinicPromotion } from '../interfaces/clinic';
import { IClinicPromotionRepository } from '../interfaces/repositories/clinicRepository';

export class ClinicPromocaoRepository implements IClinicPromotionRepository {
  private repository: Repository<ClinicPromotion> = dataSource.getRepository(ClinicPromotion);

  async save(data: IClinicPromotion & { clinica: { id_clinica: number } }) {
    const clinic = this.repository.create(data);
    return await this.repository.save(clinic);
  }

  async findAll() {
    return await this.repository.find({ relations: ['clinica'] });
  }

  async findById(id: number) {
    return await this.repository.findOne({ where: { id_promocao: id }, relations: ['clinica'] });
  }

  async findByQuery(
    query: FindOptionsWhere<IClinicPromotion> | FindOptionsWhere<IClinicPromotion>[],
  ): Promise<ClinicPromotion[]> {
    return await this.repository.find({ where: { ...query }, relations: ['clinica'] });
  }

  async findByQueryOne(
    query: FindOptionsWhere<IClinicPromotion> | FindOptionsWhere<IClinicPromotion>[],
  ): Promise<ClinicPromotion | undefined> {
    return await this.repository.findOne({ where: { ...query }, relations: ['clinica'] });
  }

  async update(id: number, data: Partial<IClinicPromotion>) {
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

