/* eslint-disable import/prefer-default-export */
import { MigrationInterface, QueryRunner } from 'typeorm';

export class createEnderecosTable20250611 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      CREATE TABLE enderecos (
        id_endereco SERIAL PRIMARY KEY,
        id_clinic INTEGER REFERENCES clinics(id_clinica),
        cep VARCHAR(8) NOT NULL,
        logradouro VARCHAR(255) NOT NULL,
        numero VARCHAR(10),
        complemento VARCHAR(100),
        bairro VARCHAR(100) NOT NULL,
        cidade VARCHAR(100) NOT NULL,
        estado VARCHAR(2) NOT NULL,
        pais VARCHAR(50) NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('DROP TABLE enderecos');
  }
}


