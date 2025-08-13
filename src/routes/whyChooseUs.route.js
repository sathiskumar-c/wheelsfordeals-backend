import express from "express";
import { getWhyChooseUs } from "../controllers/whychooseus.controller.js";

const router = express.Router();

router.get("/", getWhyChooseUs);

export default router;
