import express from "express";

import { verifyJWT } from "../middleware/auth.middleware.js";
import { verifyAdmin } from "../middleware/admin.middleware.js";
import {
  createGoldPrice,
  getTodayGoldPrices,
} from "../controllers/price.controller.js";

const router = express.Router();

router.post("/", verifyJWT, verifyAdmin, createGoldPrice);
router.get("/", verifyJWT, getTodayGoldPrices);

export default router;
