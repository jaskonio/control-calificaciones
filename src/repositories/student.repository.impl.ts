import { ModelStatic } from 'sequelize';
import { Student } from '../models/Student';
import { BaseRepository } from './base.repository';
import BaseRepositoryImpl from './base.repository.impl';


export interface StudentRepository extends BaseRepository<Student> {}


class StudentRepositoryImpl extends BaseRepositoryImpl {

    constructor(model: ModelStatic<Student>) {
        super(model)
    }
}

export default StudentRepositoryImpl;