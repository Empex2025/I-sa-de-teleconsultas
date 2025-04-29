import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('contatos')
export class Contact {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'int' })
  tipo_contato: number;

  @Column({ type: 'varchar', length: 255 })
  valor: string;

  @Column({ type: 'boolean', default: false })
  is_principal: boolean;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  dt_criacao: Date;

  @Column({ type: 'timestamp', nullable: true })
  dt_inativacao: Date;

  @CreateDateColumn({ type: 'timestamp' })
  created_at: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updated_at: Date;
}
