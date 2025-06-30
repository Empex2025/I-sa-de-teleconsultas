import { FindOptionsWhere, Repository } from 'typeorm';
import { Documento } from '../entities';
import dataSource from '../../database/typeorm';
import { IDocumentoRepository } from '../interfaces/repositories/documentoRepository';

export class DocumentoRepository implements IDocumentoRepository {
  private repository: Repository<Documento>;

  constructor() {
    this.repository = dataSource.getRepository(Documento);
  }

  async save(data: Partial<Documento>) {
    const document = this.repository.create(data);
    return await this.repository.save(document);
  }

  async findAll(): Promise<Documento[]> {
    return await this.repository.find();
  }

  async findById(id_documento: number): Promise<Documento | null> {
    return await this.repository.findOneBy({ id_documento });
  }

  async findByQuery(
    query: FindOptionsWhere<Documento> | FindOptionsWhere<Documento>[],
  ): Promise<Documento[]> {
    return await this.repository.findBy(query);
  }

  async findByQueryOne(
    query: FindOptionsWhere<Documento> | FindOptionsWhere<Documento>[],
  ): Promise<Documento | undefined> {
    return await this.repository.findOneBy(query);
  }

  async update(id_documento: number, data: Partial<Documento>) {
    await this.repository.update(id_documento, data);
    return this.findById(id_documento);
  }

  async delete(id_documento: number) {
    const document = await this.findById(id_documento);
    if (!document) return null;
    await this.repository.remove(document);
    return null;
  }
}
