import { Router } from 'express';
import { StudentController } from '../controllers/studentController';


const router: Router = Router();
const studentController = new StudentController();

router.post('/',  studentController.createEntity.bind(studentController));
router.get('/', studentController.getEntities.bind(studentController));
router.get('/:id', studentController.getEntityById.bind(studentController));
router.put('/:id', studentController.updateEntity.bind(studentController));
router.delete('/:id', studentController.deleteEntity.bind(studentController));

export default router;