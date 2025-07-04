/* eslint-disable import/prefer-default-export */
import { MigrationInterface, QueryRunner } from 'typeorm';

export class createClinicExamsTable20250611 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      CREATE TABLE clinic_exams (
        id_exame SERIAL PRIMARY KEY,
        id_clinica INTEGER NOT NULL REFERENCES clinics(id_clinica),
        nome_exame VARCHAR(100) NOT NULL,
        descricao TEXT,
        preco NUMERIC(10,2) NOT NULL CHECK (preco >= 0),
        prazo_resultado VARCHAR(50) NOT NULL,
        tipo VARCHAR(50),
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('DROP TABLE clinic_exams');
  }
}

