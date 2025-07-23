import { Repository, FindOptionsWhere } from 'typeorm';
import dataSource from '../../database/typeorm';
import { ExamPayment } from '../entities';
import { IExamPayment } from '../interfaces/exam';
import { IExamPaymentRepository } from '../interfaces/repositories/examRepository';

export class ExamPaymentRepository implements IExamPaymentRepository {
  private repository: Repository<ExamPayment> = dataSource.getRepository(ExamPayment);

  async save(data: IExamPayment) {
    const clinic = this.repository.create(data);
    return await this.repository.save(clinic);
  }

  async findAll() {
    return await this.repository.find();
  }

  async findById(id: number) {
    return await this.repository.findOneBy({ id_pagamento: id });
  }

  async findByQuery(
    query: FindOptionsWhere<IExamPayment> | FindOptionsWhere<IExamPayment>[],
  ): Promise<ExamPayment[]> {
    return await this.repository.findBy(query);
  }

  async findByQueryOne(
    query: FindOptionsWhere<IExamPayment> | FindOptionsWhere<IExamPayment>[],
  ): Promise<ExamPayment | undefined> {
    return await this.repository.findOneBy(query);
  }

  async update(id: number, data: Partial<IExamPayment>) {
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

