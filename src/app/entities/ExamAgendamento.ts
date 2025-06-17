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
