import { FindOptionsWhere } from 'typeorm';
import { Contact } from '../entities/Contact';
import { PropsContact } from './contact';

interface IContactRepository {
  save(data: PropsContact): Promise<Contact >;
  update(id: number, data: PropsContact): Promise<Contact | null>;
  findById(id: number): Promise<Contact | undefined>;
  findByQuery(query: FindOptionsWhere<Contact> | FindOptionsWhere<Contact >[]): Promise<Contact  | undefined>;
  findByQueryOne(query: FindOptionsWhere<Contact> | FindOptionsWhere<Contact>[]): Promise<Contact  | undefined>;
  find(): Promise<Contact  | undefined>;
  delete(id: number): Promise<null>;
}

export default IContactRepository;
