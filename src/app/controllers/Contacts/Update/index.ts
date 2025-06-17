import { Request, Response } from 'express';
import { ContactRepository } from '../../../repositories/Contact';
import { PropsContact } from '../../../interfaces/contact';

async function UpdateContactController(req: Request, res: Response) {
  const { id } = req.params;
  const body: PropsContact = req.body;

  const Contact = new ContactRepository();

  const getId = typeof id === 'string' ? parseInt(id) : id;

  try {
    let result = [];

    await Contact.findById(getId).then((contacts: PropsContact[]) => {
      result = contacts;
    });

    if (result.length == 0) {
      return res.status(404).json({ message: 'Produto não encontrado' });
    }

    await Contact.update(getId, body);

    return res.json({
      message: 'Produto atualizado com sucesso',
    });
  } catch (err) {
    return res.status(400).json({ message: err.message });
  }
}

export default UpdateContactController;
