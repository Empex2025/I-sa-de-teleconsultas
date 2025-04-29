import { FindOptionsWhere, Repository } from 'typeorm';
import { Contact } from '../../entities/Contact';
import dataSource from '../../../database/typeorm';
import IContactRepository from '../../interfaces/contactRepository';
import { PropsContact } from '../../interfaces/contact';

export class ContactRepository implements IContactRepository {
  private repository: Repository<Contact>;

  constructor() {
    this.repository = dataSource.getRepository(Contact);
  }

  async save(data: PropsContact) {
    const contact = new Contact();

    contact.tipo_contato = data.tipo_contato;
    contact.valor = data.valor;
    contact.is_principal = data.is_principal ?? false;
    contact.dt_criacao = data.dt_criacao ?? new Date();
    contact.dt_inativacao = data.dt_inativacao ?? new Date();

    await this.repository.save(contact);
    return contact;
  }
  async find(): Promise<any> {
    const result = this.repository.find();
    return !result || result == null ? [] : result;
  }
  async findById(id: number): Promise<any> {
    const result = this.repository.findOneBy({ id });
    return !result || result == null ? [] : result;
  }
  async findByQueryOne(query: FindOptionsWhere<Contact> | FindOptionsWhere<Contact>[]): Promise<any> {
    const result = this.repository.findOneBy(query);
    return !result || result == null ? [] : result;
  }
  async findByQuery(query: FindOptionsWhere<Contact> | FindOptionsWhere<Contact>[]): Promise<any> {
    const result = this.repository.findBy(query);
    return !result || result == null ? [] : result;
  }
  async update(id: number, data: PropsContact): Promise<Contact | null> {
    const contact = await this.repository.findOneBy({ id });

    if (!contact) return null;

    contact.tipo_contato = data.tipo_contato;
    contact.valor = data.valor;
    contact.is_principal = data.is_principal ?? contact.is_principal;
    contact.dt_criacao = data.dt_criacao ?? contact.dt_criacao;
    contact.dt_inativacao = data.dt_inativacao ?? contact.dt_inativacao;

    await this.repository.save(contact);
    return contact;
  }
  async delete(id: number): Promise<any> {
    const contact = await this.repository.findOneBy({ id });

    if (contact == null || !contact) {
      return null;
    }

    return this.repository.remove(contact);
  }
}
