import { BaseServiceImpl } from "./base.service.impl";
import StudentRepositoryImpl from "../repositories/user.repository.impl";


export class StudentService extends BaseServiceImpl{

  constructor(repository: StudentRepositoryImpl) {
    super(repository)
  }
}
