import { Router } from "express";
import { userController } from "./user.controller.js";
import { validateUser } from "../middlewares/user.middleware.js";
import { validateId } from "../middlewares/id.middleware.js";
import { validateLogin } from "../middlewares/login.middleware.js";
import { authMiddleware } from "../middlewares/auth.middleware.js";

const router = Router();

router.get('/users'       , userController.getAll);
router.get('/users/profile', authMiddleware, userController.getProfile);
router.get('/users/:id'   , validateId, userController.getOne);
router.post('/users/login', validateLogin, userController.getLogin);
router.post('/users'      , validateUser, userController.create);
router.put('/users/:id'   , validateId, validateUser, userController.update);
router.delete('/users/:id', validateId, userController.remove);


export default router;