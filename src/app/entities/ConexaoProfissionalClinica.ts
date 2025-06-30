import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn
} from 'typeorm';

@Entity("conexoes_profissionais_clinicas")
export class ConexaoProfissionalClinica {
  @PrimaryGeneratedColumn()
  id_conexao: number;

  @Column()
  id_profissional: number;

  @Column()
  id_clinica: number;

  @Column()
  status: 'pendente' | 'aceito' | 'rejeitado';

  @CreateDateColumn()
  data_convite: Date;

  @Column({ nullable: true, type: "timestamp" })
  data_aceite: Date;

  @Column({ nullable: true })
  mensagem: string;
}
