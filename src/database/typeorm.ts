import { DataSource } from 'typeorm';

import {
  AgendamentoConsulta,
  Clinic,
  ClinicExam,
  ClinicPromotion,
  Documento,
  ExamAgendamento,
  ExamPayment,
  Usuario,
} from '../app/entities';

import { createUsuarioTable20250611 } from './migrations/2025-04-28_10-39-00_create_usuario';
import { createAgendamentosConsultasTable20250611 } from './migrations/2025-04-28_10-39-01_create_agendamentos_consultas';
import { createClinicsTable20250611 } from './migrations/2025-04-28_10-39-01_create_clinics';
import { createDocumentosTable20250611 } from './migrations/2025-04-28_10-39-01_create_documentos';
import { createAvaliacoesTable20250611 } from './migrations/2025-04-28_10-39-02_create_avaliacoes';
import { createClinicExamsTable20250611 } from './migrations/2025-04-28_10-39-02_create_clinic_exams';
import { createClinicPromotionsTable20250611 } from './migrations/2025-04-28_10-39-02_create_clinic_promotions';
import { createEnderecosTable20250611 } from './migrations/2025-04-28_10-39-02_create_enderecos';
import { createExamAgendamentosTable20250611 } from './migrations/2025-04-28_10-39-02_create_exam_agendamentos';
import { createExamPaymentsTable20250611 } from './migrations/2025-04-28_10-39-02_create_exam_payments';

require('dotenv').config();

const dataSource = new DataSource({
  type: 'postgres',
  host: process.env.BD_HOST,
  port: parseInt(process.env.DB_PORT || '5432', 10),
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  entities: [
    AgendamentoConsulta,
    Clinic,
    ClinicExam,
    ClinicPromotion,
    Documento,
    ExamAgendamento,
    ExamPayment,
    Usuario,
  ],
  migrations: [
    createUsuarioTable20250611,
    createAgendamentosConsultasTable20250611,
    createClinicsTable20250611,
    createDocumentosTable20250611,
    createAvaliacoesTable20250611,
    createClinicExamsTable20250611,
    createClinicPromotionsTable20250611,
    createEnderecosTable20250611,
    createExamAgendamentosTable20250611,
    createExamPaymentsTable20250611,
  ],
});

export default dataSource;
