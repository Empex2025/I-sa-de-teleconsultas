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
