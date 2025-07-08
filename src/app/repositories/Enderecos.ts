import { Repository, FindOptionsWhere } from 'typeorm';
import dataSource from '../../database/typeorm';
import { Endereco } from '../entities/Enderecos';
import { IEndereco } from '../interfaces/endereco';
import { IEnderecoConsultaRepository } from '../interfaces/repositories/enderecoRepository';

export class EnderecoRepository implements IEnderecoConsultaRepository {
  private repository: Repository<Endereco> = dataSource.getRepository(Endereco);

  async save(data: IEndereco) {
    const agendamento = this.repository.create(data);
    return await this.repository.save(agendamento);
  }

  async findAll() {
    return await this.repository.find({ relations: ['clinica'] });
  }

  async findById(id: number) {
    return await this.repository.findOne({
      where: { id_endereco: id },
      relations: ['clinica'],
    });;
  }

  async findByQuery(
    query: FindOptionsWhere<IEndereco> | FindOptionsWhere<IEndereco>[],
  ): Promise<Endereco[]> {
    return await this.repository.find({ where: { ...query }, relations: ['clinica'] });
  }

  async findByQueryOne(
    query: FindOptionsWhere<IEndereco> | FindOptionsWhere<IEndereco>[],
  ): Promise<Endereco | undefined> {
    const response = await this.repository.findOne({ where: { ...query }, relations: ['clinica'] });
    return response
  }

  async update(id: number, data: Partial<IEndereco>) {
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
