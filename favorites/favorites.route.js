import { Router } from "express";
import { favoritesController } from "./favorites.controller.js";
import { validateId } from "../middlewares/id.middleware.js";
import { validateFavorites } from "../middlewares/favorites.middleware.js"
import { authMiddleware } from "../middlewares/auth.middleware.js";

const router = Router();

router.get('/favorites'        , authMiddleware, favoritesController.getAll);
router.get('/favorites/:id'    , validateId, favoritesController.getOne);
router.post('/favorites'       , validateFavorites, authMiddleware, favoritesController.create);
router.delete('/favorites/:id' , validateId, authMiddleware, favoritesController.remove);


export default router;