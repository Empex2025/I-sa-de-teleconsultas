/* eslint-disable import/prefer-default-export */
import { MigrationInterface, QueryRunner } from 'typeorm';

export class createExamPaymentsTable20250611 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      CREATE TABLE exam_payments (
        id_pagamento SERIAL PRIMARY KEY,
        metodo_pagamento VARCHAR(50) NOT NULL,
        tipo VARCHAR(50) NOT NULL,
        valor NUMERIC(10,2) NOT NULL CHECK (valor >= 0),
        parcelas INTEGER,
        status VARCHAR(20) DEFAULT 'Confirmado',
        data_pagamento TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('DROP TABLE exam_payments');
  }
}
