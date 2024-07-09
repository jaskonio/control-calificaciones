import { BaseServiceImpl } from "./base.service.impl";
import TutorRepositoryImpl from "../repositories/user.repository.impl";


export class TutorService extends BaseServiceImpl{

  constructor(repository: TutorRepositoryImpl) {
    super(repository)
  }
}
