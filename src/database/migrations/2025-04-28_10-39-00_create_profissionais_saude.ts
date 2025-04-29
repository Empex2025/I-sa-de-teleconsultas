/* eslint-disable import/prefer-default-export */
import { MigrationInterface, QueryRunner } from 'typeorm';

export class profissionaisSaude1693428187268 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE profissionais_saude (
        cpf VARCHAR(11) PRIMARY KEY UNIQUE NOT NULL,
        nome VARCHAR(255) NOT NULL,
        genero VARCHAR(50),
        dt_nascimento DATE NOT NULL,
        area_atuacao VARCHAR(100) NOT NULL,
        registro_prof VARCHAR(50) UNIQUE NOT NULL,
        especialidade VARCHAR(100),
        est_atuacao VARCHAR(2) NOT NULL,
        nm_usuario_id INT NOT NULL,
        senha VARCHAR(255) NOT NULL,
        ft_perfil VARCHAR(255),
        is_verificado BOOLEAN DEFAULT FALSE,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        CONSTRAINT fk_profissional_usuario FOREIGN KEY (nm_usuario_id) REFERENCES nomes_usuarios(id)
      );`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('DROP TABLE profissionais_saude');
  }
}
