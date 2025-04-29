/* eslint-disable import/prefer-default-export */
import { MigrationInterface, QueryRunner } from 'typeorm';

export class nomesUsuarios1693428187268 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE nomes_usuarios (
        id SERIAL PRIMARY KEY,
        nome_usuario VARCHAR(50) UNIQUE NOT NULL,
        dt_modificacao TIMESTAMP DEFAULT NOW(),
        is_ativo BOOLEAN DEFAULT TRUE,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('DROP TABLE nomes_usuarios');
  }
}
