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

  @CreateDateColumn()
  criado_em: Date;
}
