import { Request, Response } from 'express';
import { ContactRepository } from '../../../repositories/Contact';
import { PropsContact } from '../../../interfaces/contact';

async function SetContactController(req: Request, res: Response) {
  const body = req.body;

  const Contact = new ContactRepository();

  try {
    let result = [];

    await Contact.findByQuery(body.created_at ? body : { ...body, created_at: new Date() }).then(
      (contacts: PropsContact[]) => {
        result = contacts;
      },
    );

    if (result.length > 0) {
      return res.status(400).json({ message: 'Contato já existe' });
    }

    await Contact.save(body);

    return res.status(201).json({
      message: 'Contato criado com sucesso',
    });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
}

export default SetContactController;
