import express, { Router, Request, Response } from 'express';
import { Subject } from '../models/Subject';

const router: Router = express.Router();

// Obtener todas las asignaturas
router.get('/', async (req: Request, res: Response) => {
  try {
    const subjects = await Subject.findAll();
    res.json(subjects);
  } catch (error) {
    console.error('Error al obtener asignaturas:', error);
    res.status(500).json({ message: 'Error interno del servidor' });
  }
});

// Crear una nueva asignatura
router.post('/', async (req: Request, res: Response) => {
  const { name, code } = req.body;

  try {
    const newSubject = await Subject.create({ name, code });
    res.status(201).json(newSubject);
  } catch (error) {
    console.error('Error al crear asignatura:', error);
    res.status(500).json({ message: 'Error interno del servidor' });
  }
});

// Actualizar una asignatura existente
router.put('/:id', async (req: Request, res: Response) => {
  const { id } = req.params;
  const { name, code } = req.body;

  try {
    const subject = await Subject.findByPk(id);
    if (!subject) {
      return res.status(404).json({ message: 'Asignatura no encontrada' });
    }

    await subject.update({ name, code });
    res.json(subject);
  } catch (error) {
    console.error('Error al actualizar asignatura:', error);
    res.status(500).json({ message: 'Error interno del servidor' });
  }
});

// Eliminar una asignatura
router.delete('/:id', async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const subject = await Subject.findByPk(id);
    if (!subject) {
      return res.status(404).json({ message: 'Asignatura no encontrada' });
    }

    await subject.destroy();
    res.json({ message: 'Asignatura eliminada exitosamente' });
  } catch (error) {
    console.error('Error al eliminar asignatura:', error);
    res.status(500).json({ message: 'Error interno del servidor' });
  }
});

export default router;
