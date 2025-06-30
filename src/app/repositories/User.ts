import { Repository, FindOptionsWhere } from 'typeorm';
import dataSource from '../../database/typeorm';
import { Usuario } from '../entities';
import { IUsuario } from '../interfaces/usuario';
import { IUsuarioRepository } from '../interfaces/repositories/usuarioRepository';

export class UserRepository implements IUsuarioRepository {
  private repository: Repository<Usuario> = dataSource.getRepository(Usuario);

  async save(data: IUsuario) {
    const clinic = this.repository.create(data);
    return await this.repository.save(clinic);
  }

  async findAll() {
    return await this.repository.find();
  }

  async findById(id: number) {
    return await this.repository.findOneBy({ id_usuario: id });
  }

  async findByQuery(
    query: FindOptionsWhere<IUsuario> | FindOptionsWhere<IUsuario>[],
  ): Promise<Usuario[]> {
    return await this.repository.findBy(query);
  }

  async findByQueryOne(
    query: FindOptionsWhere<IUsuario> | FindOptionsWhere<IUsuario>[],
  ): Promise<Usuario | undefined> {
    return await this.repository.findOneBy(query);
  }

  async update(id: number, data: Partial<IUsuario>) {
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

