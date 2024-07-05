import { Teacher } from '../models/Teacher';
import { BaseController } from './baseController';
import { TeacherService } from '../services/teacher.service';
import TeacherRepositoryImpl from '../repositories/teacher.repository.impl';

export class TeacherController extends BaseController {
    constructor() {
        super(new TeacherService(new TeacherRepositoryImpl(Teacher)))
    }
}