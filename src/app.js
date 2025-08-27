// Express Imports
import express from "express";
import cors from "cors";

// Routes Imports
import bikeRoutes from "./routes/bike.routes.js";
import whyChooseUsRoutes from "./routes/whyChooseUs.route.js";

// Create Express app instance
const app = express();

// Enable CORS for cross-origin requests
app.use(cors());

// Parse incoming JSON requests
app.use(express.json());

// All routes
app.use("/api/bikes", bikeRoutes);
app.use("/api/whychooseus", whyChooseUsRoutes);





export default app;
