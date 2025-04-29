/* eslint-disable import/prefer-default-export */
import { MigrationInterface, QueryRunner } from 'typeorm';

export class contatos1693428187268 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE contatos (
        id SERIAL PRIMARY KEY,
        tipo_contato INT NOT NULL,
        valor VARCHAR(255) NOT NULL,
        is_principal BOOLEAN DEFAULT FALSE,
        dt_criacao TIMESTAMP DEFAULT NOW(),
        dt_inativacao TIMESTAMP,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('DROP TABLE contatos');
  }
}
