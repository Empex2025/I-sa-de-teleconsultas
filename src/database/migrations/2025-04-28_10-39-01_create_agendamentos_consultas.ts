/* eslint-disable import/prefer-default-export */
import { MigrationInterface, QueryRunner } from 'typeorm';

export class createAgendamentosConsultasTable20250611 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      CREATE TABLE agendamentos_consultas (
        id_consulta SERIAL PRIMARY KEY,
        id_usuario_paciente INTEGER NOT NULL REFERENCES usuario(id_usuario),
        id_usuario_profissional INTEGER NOT NULL REFERENCES usuario(id_usuario),
        id_clinica INTEGER NOT NULL REFERENCES clinics(id_clinica),
        data_hora_inicio TIMESTAMP NOT NULL,
        data_hora_fim TIMESTAMP NOT NULL CHECK (data_hora_fim > data_hora_inicio),
        tipo_consulta VARCHAR(50) NOT NULL,
        motivo VARCHAR(300) NOT NULL CHECK (LENGTH(motivo) >= 10),
        link_sala VARCHAR(255),
        comentarios TEXT,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('DROP TABLE agendamentos_consultas');
  }
}
