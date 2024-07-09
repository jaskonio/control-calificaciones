import { ModelStatic } from 'sequelize';
import { Teacher } from '../models/Teacher';
import { BaseRepository } from './base.repository';
import BaseRepositoryImpl from './base.repository.impl';


export interface TeacherRepository extends BaseRepository<Teacher> {}


class TeacherRepositoryImpl extends BaseRepositoryImpl {

    constructor(model: ModelStatic<Teacher>) {
        super(model)
    }
}

export default TeacherRepositoryImpl;