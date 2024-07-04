import { Request, Response } from 'express';
import { Grade } from '../models/Grade';

export const createGrade = async (req: Request, res: Response): Promise<void> => {
  try {
    const grade = await Grade.create(req.body);
    res.status(201).json(grade);
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
};

export const getGrades = async (req: Request, res: Response): Promise<void> => {
  try {
    const grades = await Grade.findAll();
    res.status(200).json(grades);
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
};

export const getGradeById = async (req: Request, res: Response): Promise<void> => {
  try {
    const grade = await Grade.findByPk(req.params.id);
    if (grade) {
      res.status(200).json(grade);
    } else {
      res.status(404).json({ error: 'Grade not found' });
    }
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
};

export const updateGrade = async (req: Request, res: Response): Promise<void> => {
  try {
    const grade = await Grade.findByPk(req.params.id);
    if (grade) {
      await grade.update(req.body);
      res.status(200).json(grade);
    } else {
      res.status(404).json({ error: 'Grade not found' });
    }
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
};

export const deleteGrade = async (req: Request, res: Response): Promise<void> => {
  try {
    const grade = await Grade.findByPk(req.params.id);
    if (grade) {
      await grade.destroy();
      res.status(204).json();
    } else {
      res.status(404).json({ error: 'Grade not found' });
    }
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
};
