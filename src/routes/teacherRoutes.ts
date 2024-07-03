import { Router } from 'express';
import { Teacher } from '../models/Teacher';

const router = Router();

// Create a new teacher
router.post('/', async (req, res) => {
  try {
    const teacher = await Teacher.create(req.body);
    res.status(201).json(teacher);
  } catch (error) {
    res.status(500).json({ error: error });
  }
});

// Get all teachers
router.get('/', async (req, res) => {
  try {
    const teachers = await Teacher.findAll();
    res.status(200).json(teachers);
  } catch (error) {
    res.status(500).json({ error: error });
  }
});

// Get a teacher by id
router.get('/:id', async (req, res) => {
  try {
    const teacher = await Teacher.findByPk(req.params.id);
    if (teacher) {
      res.status(200).json(teacher);
    } else {
      res.status(404).json({ error: 'Teacher not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error });
  }
});

// Update a teacher by id
router.put('/:id', async (req, res) => {
  try {
    const teacher = await Teacher.findByPk(req.params.id);
    if (teacher) {
      await teacher.update(req.body);
      res.status(200).json(teacher);
    } else {
      res.status(404).json({ error: 'Teacher not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error });
  }
});

// Delete a teacher by id
router.delete('/:id', async (req, res) => {
  try {
    const teacher = await Teacher.findByPk(req.params.id);
    if (teacher) {
      await teacher.destroy();
      res.status(204).json();
    } else {
      res.status(404).json({ error: 'Teacher not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error });
  }
});

export default router;
