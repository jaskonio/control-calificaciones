import { Student } from '../models/Student';
import { StudentService } from '../services/student.service';
import StudentRepositoryImpl from '../repositories/student.repository.impl';
import { BaseController } from './baseController';

export class StudentController extends BaseController {
    constructor() {
        super(new StudentService(new StudentRepositoryImpl(Student)))
    }
}
