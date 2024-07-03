// src/routes/gradeRoutes.ts

import express, { Router, Request, Response } from 'express';
import { Grade } from '../models/Grade';

const router: Router = express.Router();

// Obtener todas las calificaciones
router.get('/', async (req: Request, res: Response) => {
  try {
    const grades = await Grade.findAll();
    res.json(grades);
  } catch (error) {
    console.error('Error al obtener calificaciones:', error);
    res.status(500).json({ message: 'Error interno del servidor' });
  }
});

// Crear una nueva calificación
router.post('/', async (req: Request, res: Response) => {
  const { value, studentId, subjectId, period } = req.body;

  try {
    const newGrade = await Grade.create({ value, studentId, subjectId, period });
    res.status(201).json(newGrade);
  } catch (error) {
    console.error('Error al crear calificación:', error);
    res.status(500).json({ message: 'Error interno del servidor' });
  }
});

// Actualizar una calificación existente
router.put('/:id', async (req: Request, res: Response) => {
  const { id } = req.params;
  const { value, studentId, subjectId, period } = req.body;

  try {
    const grade = await Grade.findByPk(id);
    if (!grade) {
      return res.status(404).json({ message: 'Calificación no encontrada' });
    }

    await grade.update({ value, studentId, subjectId, period });
    res.json(grade);
  } catch (error) {
    console.error('Error al actualizar usuario:', error);
    res.status(500).json({ message: 'Error interno del servidor' });
  }
});

// Eliminar un usuario
router.delete('/:id', async (req: Request, res: Response) => {
    const { id } = req.params;
  
    try {
      const grade = await Grade.findByPk(id);
      if (!grade) {
        return res.status(404).json({ message: 'Usuario no encontrado' });
      }
  
      await grade.destroy();
      res.json({ message: 'Usuario eliminado exitosamente' });
    } catch (error) {
      console.error('Error al eliminar usuario:', error);
      res.status(500).json({ message: 'Error interno del servidor' });
    }
  });
  
  export default router;