import { Router } from "express";
import { classesController } from "./classes.controller.js";
import { validateClasses } from "../middlewares/classes.middleware.js";
import { validateId } from "../middlewares/id.middleware.js";
import { authMiddleware } from "../middlewares/auth.middleware.js";


const router = Router();

router.get('/classes', classesController.getAll);
router.get('/classes/users/', authMiddleware, classesController.getAllByUserId);
router.get('/classes/:id', validateId, classesController.getOne);
router.post('/classes', validateClasses, authMiddleware, classesController.create);
router.put('/classes/:id', validateId, validateClasses, authMiddleware, classesController.update);
router.delete('/classes/:id', validateId, authMiddleware, classesController.remove);

export default router;