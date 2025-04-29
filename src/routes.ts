import express from 'express';

import { authentication } from './app/middlewares';

import DefaultControllersUsers from './app/controllers/DefaultControllers';
import ContactsRoutes from './app/routes/Contacts';

const router = express.Router();

//default
router.get('/', authentication, DefaultControllersUsers)

router.use('/contacts', ContactsRoutes);

export default router;
