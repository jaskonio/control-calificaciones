import { BaseServiceImpl } from "./base.service.impl";
import UserRepositoryImpl from "../repositories/user.repository.impl";


export class UserService extends BaseServiceImpl{

  constructor(repository: UserRepositoryImpl) {
    super(repository)
  }
}
