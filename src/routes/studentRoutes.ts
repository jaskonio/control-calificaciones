import { Router } from 'express';
import { Student } from '../models/Student';

const router = Router();

// Create a new student
router.post('/', async (req, res) => {
  try {
    const student = await Student.create(req.body);
    res.status(201).json(student);
  } catch (error) {
    res.status(500).json({ error: error });
  }
});

// Get all students
router.get('/', async (req, res) => {
  try {
    const students = await Student.findAll();
    res.status(200).json(students);
  } catch (error) {
    res.status(500).json({ error: error });
  }
});

// Get a student by id
router.get('/:id', async (req, res) => {
  try {
    const student = await Student.findByPk(req.params.id);
    if (student) {
      res.status(200).json(student);
    } else {
      res.status(404).json({ error: 'Student not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error });
  }
});

// Update a student by id
router.put('/:id', async (req, res) => {
  try {
    const student = await Student.findByPk(req.params.id);
    if (student) {
      await student.update(req.body);
      res.status(200).json(student);
    } else {
      res.status(404).json({ error: 'Student not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error });
  }
});

// Delete a student by id
router.delete('/:id', async (req, res) => {
  try {
    const student = await Student.findByPk(req.params.id);
    if (student) {
      await student.destroy();
      res.status(204).json();
    } else {
      res.status(404).json({ error: 'Student not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error });
  }
});

export default router;
