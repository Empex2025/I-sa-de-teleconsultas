/* eslint-disable import/prefer-default-export */
import { MigrationInterface, QueryRunner } from 'typeorm';

export class createExamAgendamentosTable20250611 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      CREATE TABLE exam_agendamentos (
        id_agendamento SERIAL PRIMARY KEY,
        id_usuario_paciente INTEGER NOT NULL REFERENCES usuario(id_usuario),
        id_exame INTEGER NOT NULL REFERENCES clinic_exams(id_exame),
        data_hora TIMESTAMP NOT NULL,
        status_pagamento VARCHAR(20) DEFAULT 'Pendente',
        lembrete_enviado BOOLEAN DEFAULT FALSE,
        altura_m FLOAT,
        peso_kg FLOAT,
        pressao_sistolica INTEGER,
        pressao_diastolica INTEGER,
        atualizar_minha_saude BOOLEAN DEFAULT FALSE,
        id_pagamento INT REFERENCES exam_payments(id_pagamento),
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('DROP TABLE exam_agendamentos');
  }
}


