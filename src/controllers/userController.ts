import { Request, Response } from 'express';
import { User } from '../models/User';
import { createEntity, getEntities, getEntityById, updateEntity, deleteEntity } from './baseController';


export class UserController {
    public createUser = (req: Request, res: Response): Promise<void> => createEntity(User, req, res);
    public getUsers = (req: Request, res: Response): Promise<void> => getEntities(User, req, res);
    public getUserById = (req: Request, res: Response): Promise<void> => getEntityById(User, req, res);
    public updateUser = (req: Request, res: Response): Promise<void> => updateEntity(User, req, res);
    public deleteUser = (req: Request, res: Response): Promise<void> => deleteEntity(User, req, res);
}
