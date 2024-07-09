import { Router } from 'express';
import { TutorController } from '../controllers/tutorController';


const router: Router = Router();
const tutorController = new TutorController();

router.post('/',  tutorController.createEntity.bind(tutorController));
router.get('/', tutorController.getEntities.bind(tutorController));
router.get('/:id', tutorController.getEntityById.bind(tutorController));
router.put('/:id', tutorController.updateEntity.bind(tutorController));
router.delete('/:id', tutorController.deleteEntity.bind(tutorController));

export default router;