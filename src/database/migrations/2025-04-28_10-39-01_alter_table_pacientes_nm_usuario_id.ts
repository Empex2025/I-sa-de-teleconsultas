/* eslint-disable import/prefer-default-export */
import { MigrationInterface, QueryRunner } from 'typeorm';

export class pacientesIdUser1693428187268 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE pacientes
      ADD COLUMN nm_usuario_id INT NOT NULL,
      ADD CONSTRAINT fk_nm_usuario_id FOREIGN KEY (nm_usuario_id)
      REFERENCES nomes_usuarios(id);`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('ALTER TABLE pacientes DROP CONSTRAINT fk_nm_usuario_id;');
    await queryRunner.query('ALTER TABLE pacientes DROP COLUMN nm_usuario_id;');
  }
}
