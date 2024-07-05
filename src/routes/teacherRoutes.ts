import { Router } from 'express';
import { TeacherController } from '../controllers/teacherController';


const router: Router = Router();
const teacherController = new TeacherController();

router.post('/',  teacherController.createEntity.bind(teacherController));
router.get('/', teacherController.getEntities.bind(teacherController));
router.get('/:id', teacherController.getEntityById.bind(teacherController));
router.put('/:id', teacherController.updateEntity.bind(teacherController));
router.delete('/:id', teacherController.deleteEntity.bind(teacherController));

export default router;
