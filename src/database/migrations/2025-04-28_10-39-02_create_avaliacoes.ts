/* eslint-disable import/prefer-default-export */
import { MigrationInterface, QueryRunner } from 'typeorm';

export class createAvaliacoesTable20250611 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      CREATE TABLE avaliacoes (
        id_avaliacao SERIAL PRIMARY KEY,
        paciente_id VARCHAR(11) NOT NULL REFERENCES usuario(cpf),
        consulta_id INT REFERENCES agendamentos_consultas(id_consulta),
        exame_id INT REFERENCES documentos(id_documento),
        profissional_id VARCHAR(11) REFERENCES usuario(cpf),
        unidade_id VARCHAR(14) REFERENCES clinics(cnpj),
        nota INT NOT NULL CHECK (nota BETWEEN 1 AND 5),
        comentario TEXT,
        dt_avaliacao TIMESTAMP NOT NULL DEFAULT NOW(),
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('DROP TABLE avaliacoes');
  }
}



