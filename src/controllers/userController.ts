import { User } from '../models/User';
import { UserService } from '../services/user.service';
import UserRepositoryImpl from '../repositories/user.repository.impl';
import { BaseController } from './baseController';

export class UserController extends BaseController {
    constructor() {
        super(new UserService(new UserRepositoryImpl(User)))
    }
}
