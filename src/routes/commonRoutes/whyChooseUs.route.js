import express from "express";
import { getAbsoluteFileUrl } from "../../utils/paths.js";

const controllerPath = getAbsoluteFileUrl("controllers/whyChooseUs.controller.js");
const { getWhyChooseUs } = await import(controllerPath);

const router = express.Router();

router.get("/", getWhyChooseUs);

export default router;
