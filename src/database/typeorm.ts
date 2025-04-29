import { DataSource } from 'typeorm';

import { Contact } from '../app/entities';

import { contatos1693428187268 } from './migrations/2025-04-28_10-39-00_create_contatos';
import { enderecos1693428187268 } from './migrations/2025-04-28_10-39-00_create_enderecos';
import { nomesUsuarios1693428187268 } from './migrations/2025-04-28_10-39-00_create_nomes_usuario';
import { pacientes1693428187268 } from './migrations/2025-04-28_10-39-00_create_pacientes';
import { profissionaisSaude1693428187268 } from './migrations/2025-04-28_10-39-00_create_profissionais_saude';
import { unidadesSaude1693428187268 } from './migrations/2025-04-28_10-39-00_create_unidades_saude';
import { pacientesIdUser1693428187268 } from './migrations/2025-04-28_10-39-01_alter_table_pacientes_nm_usuario_id';
import { usuariosContatos1693428187268 } from './migrations/2025-04-28_10-39-01_create_contatos_usuarios';
import { documentos1693428187268 } from './migrations/2025-04-28_10-39-01_create_documents';

require('dotenv').config();

const dataSource = new DataSource({
  type: 'postgres',
  host: process.env.BD_HOST,
  port: parseInt(process.env.DB_PORT || '5432', 10),
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  entities: [Contact],
  migrations: [
    contatos1693428187268,
    enderecos1693428187268,
    nomesUsuarios1693428187268,
    pacientes1693428187268,
    profissionaisSaude1693428187268,
    unidadesSaude1693428187268,
    pacientesIdUser1693428187268,
    usuariosContatos1693428187268,
    documentos1693428187268,
  ],
});

export default dataSource;
