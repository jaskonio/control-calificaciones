import { Request, Response } from 'express';
import { Student } from '../models/Student';
import { createEntity, getEntities, getEntityById, updateEntity, deleteEntity } from './baseController';

export const createStudent = (req: Request, res: Response): Promise<void> => createEntity(Student, req, res);
export const getStudents = (req: Request, res: Response): Promise<void> => getEntities(Student, req, res);
export const getStudentById = (req: Request, res: Response): Promise<void> => getEntityById(Student, req, res);
export const updateStudent = (req: Request, res: Response): Promise<void> => updateEntity(Student, req, res);
export const deleteStudent = (req: Request, res: Response): Promise<void> => deleteEntity(Student, req, res);
