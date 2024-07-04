import { Request, Response } from 'express';
import { Subject } from '../models/Subject';
import { createEntity, getEntities, getEntityById, updateEntity, deleteEntity } from './baseController';


export const createSubject = (req: Request, res: Response): Promise<void> => createEntity(Subject, req, res);
export const getSubjects = (req: Request, res: Response): Promise<void> => getEntities(Subject, req, res);
export const getSubjectById = (req: Request, res: Response): Promise<void> => getEntityById(Subject, req, res);
export const updateSubject = (req: Request, res: Response): Promise<void> => updateEntity(Subject, req, res);
export const deleteSubject = (req: Request, res: Response): Promise<void> => deleteEntity(Subject, req, res);
