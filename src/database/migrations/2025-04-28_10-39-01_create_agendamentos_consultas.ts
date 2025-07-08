import { MigrationInterface, QueryRunner } from 'typeorm';

export class createAgendamentosConsultasTable20250611 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      CREATE TABLE agendamentos_consultas (
        id_consulta SERIAL PRIMARY KEY,
        id_usuario_paciente INTEGER NOT NULL,
        id_usuario_profissional INTEGER NOT NULL,
        id_clinica INTEGER NOT NULL,
        data_hora_inicio TIMESTAMP NOT NULL,
        data_hora_fim TIMESTAMP NOT NULL CHECK (data_hora_fim > data_hora_inicio),
        tipo_consulta VARCHAR(50) NOT NULL,
        motivo VARCHAR(300) NOT NULL CHECK (char_length(motivo) >= 10),
        link_sala VARCHAR(255),
        comentarios TEXT,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        CONSTRAINT fk_agendamento_paciente FOREIGN KEY (id_usuario_paciente)
          REFERENCES usuario(id_usuario) ON DELETE CASCADE,
        CONSTRAINT fk_agendamento_profissional FOREIGN KEY (id_usuario_profissional)
          REFERENCES usuario(id_usuario) ON DELETE CASCADE,
        CONSTRAINT fk_agendamento_clinica FOREIGN KEY (id_clinica)
          REFERENCES clinics(id_clinica) ON DELETE CASCADE
      );
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('DROP TABLE agendamentos_consultas');
  }
}
