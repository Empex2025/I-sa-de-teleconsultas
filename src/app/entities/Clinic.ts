import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn,UpdateDateColumn } from 'typeorm';

@Entity('clinics')
export class Clinic {
  @PrimaryGeneratedColumn()
  id_clinica: number;

  @Column({ length: 14, unique: true })
  cnpj: string;

  @Column({ length: 255 })
  nome_fantasia: string;

  @Column({ length: 20, nullable: true })
  telefone: string;

  @Column({ length: 255, nullable: true, unique: true })
  email: string;

  @Column({ length: 100 })
  cidade: string;

  @Column({ length: 2 })
  estado: string;

  @Column('text', { nullable: true })
  especialidades: string;

  @Column('text', { nullable: true })
  infraestrutura: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
