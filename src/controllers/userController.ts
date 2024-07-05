import { Request, Response } from 'express';
import { User } from '../models/User';
import { createEntity, getEntities, getEntityById, updateEntity, deleteEntity } from './baseController';
import { UserService } from '../services/user.service';
import UserRepositoryImpl from '../repositories/user.repository.impl';

export class UserController {
    service: UserService;

    constructor() {
        this.service = new UserService(new UserRepositoryImpl(User))
    }

    public createUser = async (req: Request, res: Response): Promise<void> => {
        try {
            const entity = await this.service.create(req.body);
            res.status(201).json(entity);
        }
        catch (error) {
            res.status(500).json({ error: (error as Error).message });
        }
    }

    public getUsers = (req: Request, res: Response): Promise<void> => getEntities(User, req, res);
    public getUserById = (req: Request, res: Response): Promise<void> => getEntityById(User, req, res);
    public updateUser = (req: Request, res: Response): Promise<void> => updateEntity(User, req, res);
    public deleteUser = (req: Request, res: Response): Promise<void> => deleteEntity(User, req, res);
}
