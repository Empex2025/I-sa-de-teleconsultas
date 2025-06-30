import { Request, Response } from 'express';
import { ContactRepository } from '../../../repositories/Contact';
import { PropsContact } from '../../../interfaces/clinic';

async function DeleteContactController(req: Request, res: Response) {
  const { id } = req.params;

  const getId = typeof id === 'string' ? parseInt(id) : id;

  const Contact = new ContactRepository ();

  try {
    let result = [];

    await Contact.findById(parseInt(String(id), 10)).then((contact:  PropsContact[]) => {
      result = contact;
    });

    if (!result) {
      return res.status(404).json({ message: 'Contato não encontrado' });
    }

    await Contact.delete(getId);

    return res.json({
      message: 'Produto deletado com sucesso',
    });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
}

export default DeleteContactController;
