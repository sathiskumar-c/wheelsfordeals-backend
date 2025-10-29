// Express Imports
import express from "express";

// Controller Imports
import * as BikeController from "../../controllers/bike.controller.js";
import permissionMiddleware from "../../middlewares/permission.middleware.js";

// Create a new router instance
const router = express.Router();

router.get("/", BikeController.getAllBikes);

router.use(permissionMiddleware(["ADMIN", "SUPERADMIN"]));

router.post("/", BikeController.createNewBike);

export default router;
