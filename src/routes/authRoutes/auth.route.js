import express from "express";
import { signup, login } from "../../controllers/auth.controller.js";
import { validate } from "../../middlewares/validator.middleware.js";
import { signupSchema, loginSchema } from "../../validators/user.validator.js";

const router = express.Router();

router.post("/signup", validate(signupSchema), signup);
router.post("/login", validate(loginSchema), login);

export default router;
