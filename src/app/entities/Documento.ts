import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn,UpdateDateColumn } from 'typeorm';

@Entity('documentos')
export class Documento {
  @PrimaryGeneratedColumn()
  id_documento: number;

  @Column({ length: 50 })
  tipo: string;

  @Column({ length: 255 })
  url_arquivo: string;

  @CreateDateColumn()
  dt_upload: Date;

  @Column()
  criado_na_plataforma: boolean;

  @Column()
  consulta_id: number;

  @Column({ length: 11, nullable: true })
  profissional_id: string;

  @Column({ length: 11 })
  paciente_id: string;

  @Column({ default: true })
  visivel_paciente: boolean;

  @Column('text', { nullable: true })
  observacoes: string;

  @UpdateDateColumn()
  updated_at: Date;
}
