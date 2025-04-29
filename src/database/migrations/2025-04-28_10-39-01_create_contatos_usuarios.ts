/* eslint-disable import/prefer-default-export */
import { MigrationInterface, QueryRunner } from 'typeorm';

export class usuariosContatos1693428187268 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE usuarios_contatos (
        id SERIAL PRIMARY KEY,
        usuario_tipo VARCHAR(20) NOT NULL,
        usuario_id VARCHAR(14) NOT NULL,
        contato_id INT NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        CONSTRAINT FK_usuarios_contatos_contato_id FOREIGN KEY (contato_id)
          REFERENCES contatos(id)
      );`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('DROP TABLE usuarios_contatos');
  }
}
