// src/routes/courseRoutes.ts

import express, { Router, Request, Response } from 'express';
import { Course } from '../models/Course';

const router: Router = express.Router();

// Obtener todos los cursos
router.get('/', async (req: Request, res: Response) => {
  try {
    const courses = await Course.findAll();
    res.json(courses);
  } catch (error) {
    console.error('Error al obtener cursos:', error);
    res.status(500).json({ message: 'Error interno del servidor' });
  }
});

// Crear un nuevo curso
router.post('/', async (req: Request, res: Response) => {
  const { name, gradeLevel } = req.body;

  try {
    const newCourse = await Course.create({ name, gradeLevel });
    res.status(201).json(newCourse);
  } catch (error) {
    console.error('Error al crear curso:', error);
    res.status(500).json({ message: 'Error interno del servidor' });
  }
});

// Actualizar un curso existente
router.put('/:id', async (req: Request, res: Response) => {
  const { id } = req.params;
  const { name, gradeLevel } = req.body;

  try {
    const course = await Course.findByPk(id);
    if (!course) {
      return res.status(404).json({ message: 'Curso no encontrado' });
    }

    await course.update({ name, gradeLevel });
    res.json(course);
  } catch (error) {
    console.error('Error al actualizar curso:', error);
    res.status(500).json({ message: 'Error interno del servidor' });
  }
});

// Eliminar un curso
router.delete('/:id', async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const course = await Course.findByPk(id);
    if (!course) {
      return res.status(404).json({ message: 'Curso no encontrado' });
    }

    await course.destroy();
    res.json({ message: 'Curso eliminado exitosamente' });
  } catch (error) {
    console.error('Error al eliminar curso:', error);
    res.status(500).json({ message: 'Error interno del servidor' });
  }
});

export default router;
