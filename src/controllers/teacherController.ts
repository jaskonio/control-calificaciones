import { Request, Response } from 'express';
import { Teacher } from '../models/Teacher';
import { createEntity, getEntities, getEntityById, updateEntity, deleteEntity } from './baseController';


export const createTeacher = (req: Request, res: Response): Promise<void> => createEntity(Teacher, req, res);
export const getTeachers = (req: Request, res: Response): Promise<void> => getEntities(Teacher, req, res);
export const getTeacherById = (req: Request, res: Response): Promise<void> => getEntityById(Teacher, req, res);
export const updateTeacher = (req: Request, res: Response): Promise<void> => updateEntity(Teacher, req, res);
export const deleteTeacher = (req: Request, res: Response): Promise<void> => deleteEntity(Teacher, req, res);