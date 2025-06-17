/* eslint-disable import/prefer-default-export */
import { MigrationInterface, QueryRunner } from 'typeorm';

export class createDocumentosTable20250611 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      CREATE TABLE documentos (
        id_documento SERIAL PRIMARY KEY,
        tipo VARCHAR(50) NOT NULL,
        url_arquivo VARCHAR(255) NOT NULL,
        dt_upload TIMESTAMP DEFAULT NOW(),
        criado_na_plataforma BOOLEAN NOT NULL,
        consulta_id INT NOT NULL REFERENCES agendamentos_consultas(id_consulta),
        profissional_id VARCHAR(11) REFERENCES usuario(cpf),
        paciente_id VARCHAR(11) NOT NULL REFERENCES usuario(cpf),
        visivel_paciente BOOLEAN DEFAULT TRUE,
        observacoes TEXT,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('DROP TABLE documentos');
  }
}

