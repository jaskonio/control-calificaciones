import { ModelStatic } from 'sequelize';
import { Tutor } from '../models/Tutor';
import { BaseRepository } from './base.repository';
import BaseRepositoryImpl from './base.repository.impl';


export interface TutorRepository extends BaseRepository<Tutor> {}


class TutorRepositoryImpl extends BaseRepositoryImpl {

    constructor(model: ModelStatic<Tutor>) {
        super(model)
    }
}

export default TutorRepositoryImpl;