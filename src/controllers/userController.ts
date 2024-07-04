import { Request, Response } from 'express';
import { User } from '../models/User';
import { createEntity, getEntities, getEntityById, updateEntity, deleteEntity } from './baseController';


export const createUser = (req: Request, res: Response): Promise<void> => createEntity(User, req, res);
export const getUsers = (req: Request, res: Response): Promise<void> => getEntities(User, req, res);
export const getUserById = (req: Request, res: Response): Promise<void> => getEntityById(User, req, res);
export const updateUser = (req: Request, res: Response): Promise<void> => updateEntity(User, req, res);
export const deleteUser = (req: Request, res: Response): Promise<void> => deleteEntity(User, req, res);