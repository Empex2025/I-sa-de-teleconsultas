import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, OneToMany, UpdateDateColumn } from 'typeorm';
import { AgendamentoConsulta } from './AgendamentoConsulta';
import { ConexaoProfissionalClinica } from './ConexaoProfissionalClinica';
import { Documento } from './Documento';
import { ExamAgendamento } from './ExamAgendamento';

@Entity('usuario')
export class Usuario {
  @PrimaryGeneratedColumn()
  id_usuario: number;

  @Column({ length: 20 })
  usuario_tipo: string;

  @Column({ length: 14 })
  cpfcnpj: string;

  @Column({ length: 255 })
  nome: string;

  @Column({ length: 50, nullable: true })
  genero: string;

  @Column({ length: 255, nullable: true })
  ft_perfil: string;

  @Column({ length: 255, select: false, type: 'text' })
  senha_hash: string;

  @Column({ default: false })
  is_verificado: boolean;

  @Column('date')
  dt_nascimento: Date;

  @Column({ default: true })
  is_ativo: boolean;

  @Column({ length: 500, nullable: true })
  descricao_bio: string;

  @OneToMany(() => AgendamentoConsulta, ag => ag.paciente)
  agendamentos_paciente: AgendamentoConsulta[];

  @OneToMany(() => AgendamentoConsulta, ag => ag.profissional)
  agendamentos_profissional: AgendamentoConsulta[];

  @OneToMany(() => ConexaoProfissionalClinica, conexao => conexao.profissional)
  conexoes_clinicas: ConexaoProfissionalClinica[];

  @OneToMany(() => Documento, doc => doc.profissional)
  documentos_enviados: Documento[];

  @OneToMany(() => Documento, doc => doc.paciente)
  documentos_recebidos: Documento[];

  @OneToMany(() => ExamAgendamento, ag => ag.paciente)
  exames_agendados: ExamAgendamento[];

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
