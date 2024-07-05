import { Router } from 'express';
import { UserController } from '../controllers/userController';


const router: Router = Router();
const userController = new UserController();

router.post('/',  userController.createEntity.bind(userController));
router.get('/', userController.getEntities.bind(userController));
router.get('/:id', userController.getEntityById.bind(userController));
router.put('/:id', userController.updateEntity.bind(userController));
router.delete('/:id', userController.deleteEntity.bind(userController));

export default router;