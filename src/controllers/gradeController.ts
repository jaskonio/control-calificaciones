import { Request, Response } from 'express';
import { Grade } from '../models/Grade';
import { createEntity, getEntities, getEntityById, updateEntity, deleteEntity } from './baseController';

export const createGrade = (req: Request, res: Response): Promise<void> => createEntity(Grade, req, res);
export const getGrades = (req: Request, res: Response): Promise<void> => getEntities(Grade, req, res);
export const getGradeById = (req: Request, res: Response): Promise<void> => getEntityById(Grade, req, res);
export const updateGrade = (req: Request, res: Response): Promise<void> => updateEntity(Grade, req, res);
export const deleteGrade = (req: Request, res: Response): Promise<void> => deleteEntity(Grade, req, res);
