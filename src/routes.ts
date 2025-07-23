import express from 'express';

import { authentication } from './app/middlewares';

import DefaultControllersUsers from './app/controllers/DefaultControllers';

import AgendamentoConsultaRoutes from './app/routes/AgendamentoConsultaRoutes';
import AvaliacaoRoutes from './app/routes/AvaliacaoRoutes';
import Clinic from './app/routes/ClinicRoutes';
import ClinicExamRoutes from './app/routes/ClinicExamRoutes';
import ClinicPromocaoRoutes from './app/routes/ClinicPromocaoRoutes';
import ConexaoProfissionalClinicaRoutes from './app/routes/ConexaoProfissionalClinicaRoutes';
import DocumentRoutes from './app/routes/DocumentRoutes';
import ExamAgendamentoRoutes from './app/routes/ExamAgendamentoRoutes';
import ExamPaymentRoutes from './app/routes/ExamPaymentRoutes';
import EnderecosRoutes from './app/routes/EnderecosRoutes';

import UploadRoutes from './app/routes/UploadRoutes';

const router = express.Router();

//default
router.get('/', authentication, DefaultControllersUsers)
router.get('/api', authentication, DefaultControllersUsers)

router.use('/api/agendamento-consulta', AgendamentoConsultaRoutes);
router.use('/api/avaliacao', AvaliacaoRoutes);
router.use('/api/clinic', Clinic);
router.use('/api/exam', ClinicExamRoutes);
router.use('/api/agendamento', ExamAgendamentoRoutes);
router.use('/api/promocao', ClinicPromocaoRoutes);
router.use('/api/payment', ExamPaymentRoutes);
router.use('/api/conexao-profissional-clinic', ConexaoProfissionalClinicaRoutes);
router.use('/api/document', DocumentRoutes);
router.use('/api/endereco', EnderecosRoutes);

router.use('/api/upload-files', UploadRoutes);

export default router;
