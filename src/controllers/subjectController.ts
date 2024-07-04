import { Request, Response } from 'express';
import { Subject } from '../models/Subject';

export const createSubject = async (req: Request, res: Response): Promise<void> => {
  try {
    const subject = await Subject.create(req.body);
    res.status(201).json(subject);
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
};

export const getSubjects = async (req: Request, res: Response): Promise<void> => {
  try {
    const subjects = await Subject.findAll();
    res.status(200).json(subjects);
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
};

export const getSubjectById = async (req: Request, res: Response): Promise<void> => {
  try {
    const subject = await Subject.findByPk(req.params.id);
    if (subject) {
      res.status(200).json(subject);
    } else {
      res.status(404).json({ error: 'Subject not found' });
    }
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
};

export const updateSubject = async (req: Request, res: Response): Promise<void> => {
  try {
    const subject = await Subject.findByPk(req.params.id);
    if (subject) {
      await subject.update(req.body);
      res.status(200).json(subject);
    } else {
      res.status(404).json({ error: 'Subject not found' });
    }
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
};

export const deleteSubject = async (req: Request, res: Response): Promise<void> => {
  try {
    const subject = await Subject.findByPk(req.params.id);
    if (subject) {
      await subject.destroy();
      res.status(204).json();
    } else {
      res.status(404).json({ error: 'Subject not found' });
    }
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
};
