import { Router } from 'express';
import { createStudent, deleteStudent, getStudentById, getStudents, updateStudent} from '../controllers/studentController';


const router: Router = Router();

router.post('/', createStudent);
router.get('/', getStudents);
router.get('/:id', getStudentById);
router.put('/:id', updateStudent);
router.delete('/:id', deleteStudent);

export default router;
