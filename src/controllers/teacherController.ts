import { Request, Response } from 'express';
import { Teacher } from '../models/Teacher';

export const createTeacher = async (req: Request, res: Response): Promise<void> => {
  try {
    const teacher = await Teacher.create(req.body);
    res.status(201).json(teacher);
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
};

export const getTeachers = async (req: Request, res: Response): Promise<void> => {
  try {
    const teachers = await Teacher.findAll();
    res.status(200).json(teachers);
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
};

export const getTeacherById = async (req: Request, res: Response): Promise<void> => {
  try {
    const teacher = await Teacher.findByPk(req.params.id);
    if (teacher) {
      res.status(200).json(teacher);
    } else {
      res.status(404).json({ error: 'Teacher not found' });
    }
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
};

export const updateTeacher = async (req: Request, res: Response): Promise<void> => {
  try {
    const teacher = await Teacher.findByPk(req.params.id);
    if (teacher) {
      await teacher.update(req.body);
      res.status(200).json(teacher);
    } else {
      res.status(404).json({ error: 'Teacher not found' });
    }
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
};

export const deleteTeacher = async (req: Request, res: Response): Promise<void> => {
  try {
    const teacher = await Teacher.findByPk(req.params.id);
    if (teacher) {
      await teacher.destroy();
      res.status(204).json();
    } else {
      res.status(404).json({ error: 'Teacher not found' });
    }
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
};
