/* eslint-disable import/prefer-default-export */
import { MigrationInterface, QueryRunner } from 'typeorm';

export class pacientes1693428187268 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE pacientes (
        id_pacientes SERIAL PRIMARY KEY NOT NULL,
        cpf VARCHAR(11) UNIQUE NOT NULL,
        nome VARCHAR(255) NOT NULL,
        genero VARCHAR(50),
        dt_nascimento DATE NOT NULL,
        senha VARCHAR(255) NOT NULL,
        ft_perfil TEXT,
        is_verificado BOOLEAN DEFAULT FALSE,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('DROP TABLE pacientes');
  }
}
