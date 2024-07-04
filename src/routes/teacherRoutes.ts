import { Router } from 'express';
import { createTeacher, deleteTeacher, getTeacherById, getTeachers, updateTeacher} from '../controllers/teacherController';


const router: Router = Router();

router.post('/', createTeacher);
router.get('/', getTeachers);
router.get('/:id', getTeacherById);
router.put('/:id', updateTeacher);
router.delete('/:id', deleteTeacher);

export default router;
