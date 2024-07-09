import { Tutor } from '../models/Tutor';
import { TutorService } from '../services/tutor.service';
import TutorRepositoryImpl from '../repositories/tutor.repository.impl';
import { BaseController } from './baseController';

export class TutorController extends BaseController {
    constructor() {
        super(new TutorService(new TutorRepositoryImpl(Tutor)))
    }
}
