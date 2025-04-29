/* eslint-disable import/prefer-default-export */
import { MigrationInterface, QueryRunner } from 'typeorm';

export class unidadesSaude1693428187268 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE unidades_saude (
        cnpj VARCHAR(14) PRIMARY KEY UNIQUE NOT NULL,
        nm_fantasia VARCHAR(255) NOT NULL,
        tipo_unidade VARCHAR(100) NOT NULL,
        resp_legal VARCHAR(255) NOT NULL,
        cpf_resp VARCHAR(11) NOT NULL,
        rgistro_resp VARCHAR(50) NOT NULL,
        endereco_id INT NOT NULL,
        nm_usuario_id INT NOT NULL,
        senha VARCHAR(255) NOT NULL,
        ft_perfil VARCHAR(255),
        is_verificado BOOLEAN DEFAULT FALSE,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        CONSTRAINT fk_unidade_endereco FOREIGN KEY (endereco_id) REFERENCES enderecos(id),
        CONSTRAINT fk_unidade_usuario FOREIGN KEY (nm_usuario_id) REFERENCES nomes_usuarios(id)
      );`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('DROP TABLE unidades_saude');
  }
}
