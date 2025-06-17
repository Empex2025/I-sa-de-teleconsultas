/* eslint-disable import/prefer-default-export */
import { MigrationInterface, QueryRunner } from 'typeorm';

export class createUsuarioTable20250611 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      CREATE TABLE usuario (
        id_usuario SERIAL PRIMARY KEY,
        usuario_tipo VARCHAR(20) NOT NULL,
        cpfcnpj VARCHAR(14) NOT NULL,
        nome VARCHAR(255) NOT NULL,
        genero VARCHAR(50),
        cpf VARCHAR(11) UNIQUE NOT NULL,
        ft_perfil VARCHAR(255),
        senha_hash VARCHAR(255) NOT NULL,
        is_verificado BOOLEAN NOT NULL DEFAULT FALSE,
        dt_nascimento DATE NOT NULL,
        is_ativo BOOLEAN DEFAULT TRUE,
        descricao_bio VARCHAR(500),
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('DROP TABLE usuario');
  }
}
