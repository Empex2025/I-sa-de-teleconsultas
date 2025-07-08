import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
  RelationId,
} from 'typeorm';
import { Usuario } from './Usuario';
import { AgendamentoConsulta } from './AgendamentoConsulta';

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

  @ManyToOne(() => Usuario)
  @JoinColumn({ name: 'paciente_id' })
  paciente: Usuario;

  @RelationId((doc: Documento) => doc.paciente)
  paciente_id: number;

  @ManyToOne(() => Usuario)
  @JoinColumn({ name: 'profissional_id' })
  profissional: Usuario;

  @RelationId((doc: Documento) => doc.profissional)
  profissional_id: number;

  @ManyToOne(() => AgendamentoConsulta)
  @JoinColumn({ name: 'consulta_id' })
  consulta: AgendamentoConsulta;

  @RelationId((doc: Documento) => doc.consulta)
  consulta_id: number;

  @Column({ default: true })
  visivel_paciente: boolean;

  @Column('text', { nullable: true })
  observacoes: string;

  @UpdateDateColumn()
  updated_at: Date;
}
