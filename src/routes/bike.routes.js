
// Express Imports
import express from "express";

// Controller Imports
import { getAllBikes } from "../controllers/bike.controller.js";

// Create a new router instance
const router = express.Router();

// Route to get all bikes
router.get("/", getAllBikes);

export default router;
