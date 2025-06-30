/* eslint-disable import/prefer-default-export */
import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateConexoesProfissionaisClinicas1720000000000 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      CREATE TABLE t_conexoes_profissionais_clinicas (
        id_conexao SERIAL PRIMARY KEY,
        id_profissional INT NOT NULL,
        id_clinica INT NOT NULL,
        status VARCHAR(20) NOT NULL,
        data_convite TIMESTAMP DEFAULT NOW(),
        data_aceite TIMESTAMP NULL,
        mensagem VARCHAR(255) NULL
      );
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('DROP TABLE t_conexoes_profissionais_clinicas');
  }
}
