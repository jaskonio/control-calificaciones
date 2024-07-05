import { ModelStatic } from 'sequelize';
import { Teacher } from '../models/Teacher';
import { BaseRepository } from './base.repository';
import BaseRepositoryImpl from './base.repository.impl';
import { User } from '../models/User';

export interface TeacherRepository extends BaseRepository<Teacher> {}

class TeacherRepositoryImpl extends BaseRepositoryImpl {

    constructor(model: ModelStatic<Teacher>) {
        super(model)
    }

    async save(data: any): Promise<Teacher> {
        // const user = new User({...data, role: 'docente'})
        // const user_result = await user.save({returning:true})
        // const teacher = new Teacher()
        // teacher.userId = user_result.id
        // return teacher.save({returning:true})
        const body = {
            users: data
        }
        const result = await Teacher.create(body, 
            {
                include: [User]
            }
        )
        
        return result
    }

    async getAll(): Promise<Teacher[]> {
        const results = await Teacher.findAll({ include: [{all: true}]})
        return results;
    }
}

export default TeacherRepositoryImpl;