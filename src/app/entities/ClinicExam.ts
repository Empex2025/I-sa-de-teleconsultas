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
