import { Router } from 'express';
import { createGrade, deleteGrade, getGradeById, getGrades, updateGrade} from '../controllers/gradeController';


const router: Router = Router();

router.post('/', createGrade);
router.get('/', getGrades);
router.get('/:id', getGradeById);
router.put('/:id', updateGrade);
router.delete('/:id', deleteGrade);
  
export default router;