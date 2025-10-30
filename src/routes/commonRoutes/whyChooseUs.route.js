import express from "express";
import * as WhyChooseUsController from "../../controllers/whyChooseUs.controller.js";

const router = express.Router();

router.get("/", WhyChooseUsController.getWhyChooseUs);

export default router;
