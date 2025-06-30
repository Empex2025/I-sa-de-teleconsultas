import { Repository } from 'typeorm';
import { Documento } from '../entities';
import dataSource from '../../database/typeorm';

export class DocumentoRepository {
  private repository: Repository<Documento>;

  constructor() {
    this.repository = dataSource.getRepository(Documento);
  }

  async save(data: Partial<Documento>) {
    const entity = this.repository.create(data);
    return await this.repository.save(entity);
  }

  async findAll(): Promise<Documento[]> {
    return await this.repository.find();
  }

  async findById(id_documento: number): Promise<Documento | null> {
    return await this.repository.findOneBy({ id_documento });
  }

  async update(id_documento: number, data: Partial<Documento>) {
    await this.repository.update(id_documento, data);
    return this.findById(id_documento);
  }

  async delete(id_documento: number): Promise<void> {
    await this.repository.delete(id_documento);
  }
}