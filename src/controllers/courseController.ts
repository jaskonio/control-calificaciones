import { Request, Response } from 'express';
import { Course } from '../models/Course';
import { createEntity, getEntities, getEntityById, updateEntity, deleteEntity } from './baseController';

export const createCourse = (req: Request, res: Response): Promise<void> => createEntity(Course, req, res);
export const getCourses = (req: Request, res: Response): Promise<void> => getEntities(Course, req, res);
export const getCourseById = (req: Request, res: Response): Promise<void> => getEntityById(Course, req, res);
export const updateCourse = (req: Request, res: Response): Promise<void> => updateEntity(Course, req, res);
export const deleteCourse = (req: Request, res: Response): Promise<void> => deleteEntity(Course, req, res);