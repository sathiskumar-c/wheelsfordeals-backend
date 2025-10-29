// Express Imports
import express from "express";
import cors from "cors";
import morgan from "morgan";
import cookieParser from "cookie-parser";

// Routes Imports
import rootRouter from "./routes/index.routes.js";

// Create Express app instance
const app = express();

// Enable CORS for cross-origin requests
app.use(cors());

// Parse incoming JSON requests
app.use(express.json());

app.use(morgan(":method :url :status  - :response-time ms"));
app.use(cookieParser());

// All routes
app.use("/api", rootRouter);

export default app;
