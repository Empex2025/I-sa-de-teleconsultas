/* eslint-disable import/prefer-default-export */
import { MigrationInterface, QueryRunner } from 'typeorm';

export class documentos1693428187268 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE documentos (
        id SERIAL PRIMARY KEY,
        tipo VARCHAR(50) NOT NULL,
        url_arquivo VARCHAR(255) NOT NULL,
        dt_upload TIMESTAMP DEFAULT NOW(),
        usuario_id VARCHAR(14),
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        CONSTRAINT fk_documento_usuario FOREIGN KEY (usuario_id) REFERENCES pacientes(cpf) ON DELETE CASCADE
      );`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('DROP TABLE documentos');
  }
}
