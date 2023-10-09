import { Router } from "express";
import { sales_detailController } from "./sales_detail.controller.js";
import { validateSales_detail } from "../middlewares/sales_detail.middleware.js";

const router = Router();

router.post('/sales_detail', validateSales_detail, sales_detailController.create)

export default router;