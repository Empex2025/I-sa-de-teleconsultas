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
import { Documento } from './Documento';
import { Clinic } from './Clinic';

@Entity('avaliacoes')
export class Avaliacao {
  @PrimaryGeneratedColumn()
  id_avaliacao: number;

  @ManyToOne(() => Usuario, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'paciente_id', referencedColumnName: 'cpf' })
  paciente: Usuario;

  @RelationId((avaliacao: Avaliacao) => avaliacao.paciente)
  paciente_id: string;

  @ManyToOne(() => AgendamentoConsulta, { nullable: true, onDelete: 'SET NULL' })
  @JoinColumn({ name: 'consulta_id' })
  consulta: AgendamentoConsulta;

  @RelationId((avaliacao: Avaliacao) => avaliacao.consulta)
  consulta_id: number;

  @ManyToOne(() => Documento, { nullable: true, onDelete: 'SET NULL' })
  @JoinColumn({ name: 'exame_id' })
  exame: Documento;

  @RelationId((avaliacao: Avaliacao) => avaliacao.exame)
  exame_id: number;

  @ManyToOne(() => Usuario, { nullable: true, onDelete: 'SET NULL' })
  @JoinColumn({ name: 'profissional_id', referencedColumnName: 'cpf' })
  profissional: Usuario;

  @RelationId((avaliacao: Avaliacao) => avaliacao.profissional)
  profissional_id: string;

  @ManyToOne(() => Clinic, { nullable: true, onDelete: 'SET NULL' })
  @JoinColumn({ name: 'unidade_id', referencedColumnName: 'cnpj' })
  unidade: Clinic;

  @RelationId((avaliacao: Avaliacao) => avaliacao.unidade)
  unidade_id: string;

  @Column({ type: 'int' })
  nota: number;

  @Column({ type: 'text', nullable: true })
  comentario: string;

  @CreateDateColumn({ name: 'dt_avaliacao' })
  dt_avaliacao: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
