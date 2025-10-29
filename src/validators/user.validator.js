import { z } from "zod";

export const signupSchema = z.object({
  body: z.object({
    name: z.string().min(2, "Name must be at least 2 characters"),
    email: z.email().min(2, "Invalid email format"),
    password: z.string().min(6, "Password must be at least 6 characters"),
    phone_numer: z
      .string()
      .regex(/^(\+?\d{1,3}[- ]?)?\d{10}$/, "Invalid phone number format")
      .optional(),
    role: z
      .enum(["CUSTOMER", "ADMIN", "SUPERADMIN"])
      .optional()
      .default("CUSTOMER"),
  }),
});

export const loginSchema = z.object({
  body: z.object({
    email: z.email().min(2, "Invalid email format"),
    password: z.string().min(6, "Enter valid password"),
  }),
});
