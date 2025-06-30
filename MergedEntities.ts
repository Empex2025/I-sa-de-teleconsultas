
// ========== AgendamentoConsulta.ts ==========
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn,UpdateDateColumn } from 'typeorm';

@Entity('agendamentos_consultas')
export class AgendamentoConsulta {
  @PrimaryGeneratedColumn()
  id_consulta: number;

  @Column()
  id_usuario_paciente: number;

  @Column()
  id_usuario_profissional: number;

  @Column()
  id_clinica: number;

  @Column('timestamp')
  data_hora_inicio: Date;

  @Column('timestamp')
  data_hora_fim: Date;

  @Column({ length: 50 })
  tipo_consulta: string;

  @Column({ length: 300 })
  motivo: string;

  @Column({ length: 255, nullable: true })
  link_sala: string;

  @Column('text', { nullable: true })
  comentarios: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}


// ========== Clinic.ts ==========
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


// ========== ClinicExam.ts ==========
import { Entity, PrimaryGeneratedColumn, Column,UpdateDateColumn,CreateDateColumn } from 'typeorm';

@Entity('clinic_exams')
export class ClinicExam {
  @PrimaryGeneratedColumn()
  id_exame: number;

  @Column()
  id_clinica: number;

  @Column({ length: 100 })
  nome_exame: string;

  @Column('text', { nullable: true })
  descricao: string;

  @Column('numeric')
  preco: number;

  @Column({ length: 50 })
  prazo_resultado: string;

  @Column({ length: 50, nullable: true })
  tipo: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}


// ========== ClinicPromocao.ts ==========
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn,UpdateDateColumn } from 'typeorm';

@Entity('clinic_promotions')
export class ClinicPromotion {
  @PrimaryGeneratedColumn()
  id_promocao: number;

  @Column()
  id_clinica: number;

  @Column({ length: 100 })
  titulo: string;

  @Column('text')
  descricao: string;

  @Column('date')
  validade_inicio: Date;

  @Column('date')
  validade_fim: Date;

  @Column({ length: 255, nullable: true })
  imagem_url: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}


// ========== Documento.ts ==========
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


// ========== ExamAgendamento.ts ==========
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn,UpdateDateColumn } from 'typeorm';

@Entity('exam_agendamentos')
export class ExamAgendamento {
  @PrimaryGeneratedColumn()
  id_agendamento: number;

  @Column()
  id_usuario_paciente: number;

  @Column()
  id_exame: number;

  @Column('timestamp')
  data_hora: Date;

  @Column({ length: 20, default: 'Pendente' })
  status_pagamento: string;

  @Column({ default: false })
  lembrete_enviado: boolean;

  @Column('float', { nullable: true })
  altura_m: number;

  @Column('float', { nullable: true })
  peso_kg: number;

  @Column('int', { nullable: true })
  pressao_sistolica: number;

  @Column('int', { nullable: true })
  pressao_diastolica: number;

  @Column({ default: false })
  atualizar_minha_saude: boolean;

  @Column({ nullable: true })
  id_pagamento: number;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}


// ========== ExamPayment.ts ==========
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn,UpdateDateColumn } from 'typeorm';

@Entity('exam_payments')
export class ExamPayment {
  @PrimaryGeneratedColumn()
  id_pagamento: number;

  @Column({ length: 50 })
  metodo_pagamento: string;

  @Column({ length: 50 })
  tipo: string;

  @Column('numeric')
  valor: number;

  @Column('int', { nullable: true })
  parcelas: number;

  @Column({ length: 20, default: 'Confirmado' })
  status: string;

  @CreateDateColumn()
  data_pagamento: Date;

  @UpdateDateColumn()
  updated_at: Date;
}


// ========== Usuario.ts ==========
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm';

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

  @Column({ length: 11, unique: true })
  cpf: string;

  @Column({ length: 255, nullable: true })
  ft_perfil: string;

  @Column({ length: 255 })
  senha_hash: string;

  @Column({ default: false })
  is_verificado: boolean;

  @Column('date')
  dt_nascimento: Date;

  @Column({ default: true })
  is_ativo: boolean;

  @Column({ length: 500, nullable: true })
  descricao_bio: string;

  @CreateDateColumn()
  criado_em: Date;
}

