import { ZodError } from "zod";

export const validate = (schema) => (req, res, next) => {
  try {
    schema.parse({
      body: req.body,
      query: req.query,
      params: req.params,
    });
    next();
  } catch (err) {
    if (err instanceof ZodError) {
      const formattedErrors = {};
      err.issues.forEach((issue) => {
        // pick last element from path (e.g. "email" instead of "body.email")
        const field = issue.path[issue.path.length - 1];
        formattedErrors[field] = issue.message;
      });

      return res.status(400).json({
        success: false,
        errors: formattedErrors,
      });
    }

    // fallback for unknown errors
    return res.status(500).json({
      success: false,
      message: err.message || "Unknown validation error",
    });
  }
};
