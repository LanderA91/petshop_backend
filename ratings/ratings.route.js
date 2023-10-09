import { Router } from "express";
import { ratingsController } from "./ratings.controller.js";
import { validateId } from "../middlewares/id.middleware.js";
import { validateRatings } from "../middlewares/ratings.middleware.js";
import { authMiddleware } from "../middlewares/auth.middleware.js";

const router = Router();

router.post('/ratings', authMiddleware, validateRatings, ratingsController.create)
router.get('/ratings/class/:id', validateId, ratingsController.getClassAvgRating);
router.get('/ratings/user', authMiddleware, ratingsController.getUserAvgRating);


export default router;