import express from 'express';

import { authentication } from '../../middlewares';

import {DeleteContact,GetContact,SetContact, UpdateContact} from '../../controllers/Contacts';

const router = express.Router();

//default
router.get('/', authentication, GetContact);
router.post('/created-contact', authentication, SetContact);
router.put('/:id', authentication, UpdateContact);
router.delete('/:id', authentication, DeleteContact);

export default router;
