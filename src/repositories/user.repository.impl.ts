import { ModelStatic } from 'sequelize';
import { User } from '../models/User';
import { BaseRepository } from './base.repository';
import BaseRepositoryImpl from './base.repository.impl';

export interface UserRepository extends BaseRepository<User> {}

class UserRepositoryImpl extends BaseRepositoryImpl {

    constructor(model: ModelStatic<User>) {
        super(model)
    }
}

export default UserRepositoryImpl;