import { Request, Response } from 'express';
import { ContactRepository } from '../../../repositories/Contact';
import { PropsContact } from '../../../interfaces/contact';

async function GetContactController(req: Request, res: Response) {
  const query = req.query;
  const Contact = new ContactRepository();

  try {
    let result = [];

    if (query) {
      await Contact.findByQuery(query).then((contacts: PropsContact[]) => {
        result = contacts;
      });
    } else {
      await Contact.find().then((contacts: PropsContact[]) => {
        result = contacts;
      });
    }

    if (result.length == 0) {
      return res.status(404).json({ message: 'Nenhum contato foi encontrado' });
    }

    return res.json({
      result,
    });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
}

export default GetContactController;
