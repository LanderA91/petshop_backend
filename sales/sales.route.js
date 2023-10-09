import { Router } from "express";
import { salesController } from "./sales.controller.js";
import { validateSales } from "../middlewares/sales.middleware.js";
import { authMiddleware } from "../middlewares/auth.middleware.js";

const router = Router();

router.get('/sales' , salesController.getAll);
router.post('/sales', authMiddleware, validateSales, salesController.create);

export default router;