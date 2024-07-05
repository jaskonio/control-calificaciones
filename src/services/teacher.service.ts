import { BaseServiceImpl } from "./base.service.impl";
import TeacherRepositoryImpl from "../repositories/teacher.repository.impl";


export class TeacherService extends BaseServiceImpl{

  constructor(repository: TeacherRepositoryImpl) {
    super(repository)
  }
}
