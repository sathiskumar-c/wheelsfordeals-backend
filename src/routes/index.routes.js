// Express Imports
import express from "express";
import bikeRoutes from "./bikeRoutes/bike.routes.js";
import whychooseusRoutes from "./commonRoutes/whyChooseUs.route.js";
import authRoutes from "./authRoutes/auth.route.js";

import authMiddleware from "../middlewares/auth.middleware.js";

import userRoutes from "./userRoutes/user.route.js";

// Create a new router instance
const router = express.Router();

router.use("/auth", authRoutes);

// Route to get all bikes
router.use("/bikes", bikeRoutes);
router.use("/whychooseus", whychooseusRoutes);

router.use(authMiddleware);

router.use("/users", userRoutes);

export default router;
