import jwt from "jsonwebtoken";
import { getRole } from "../services/user.service.js";

const permissionMiddleware = (roles = []) => {
  return async (req, res, next) => {
    try {
      const authHeader = req.headers["authorization"];
      if (!authHeader || !authHeader.startsWith("Bearer ")) {
        return res.status(401).json({
          success: false,
          message: "Authorization token missing or invalid",
        });
      }

      const token = authHeader.split(" ")[1];
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      const userRole = await getRole(decoded.id);

      req.user = decoded;

      // If roles are passed, check user role
      if (roles.length && !roles.includes(userRole.role)) {
        return res.status(403).json({
          success: false,
          message: "Access denied. Insufficient permissions.",
        });
      }

      next();
    } catch (error) {
      return res.status(403).json({
        success: false,
        message: "Invalid or expired token",
      });
    }
  };
};

export default permissionMiddleware;
