import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import * as userRepo from "../repositories/user.repository.js";

const generateAccessToken = (user) => {
  return jwt.sign(
    { id: user.userId, email: user.email },
    process.env.JWT_SECRET,
    { expiresIn: "30d" }, // 30 days
  );
};

const generateRefreshToken = (user) => {
  return jwt.sign(
    { id: user.userId, email: user.email },
    process.env.JWT_SECRET, // use a separate secret
    { expiresIn: "60d" }, // 60 days
  );
};

export const signup = async ({ name, email, password, role }) => {
  const existingUser = await userRepo.findUserByEmail(email);
  if (existingUser) throw new Error("Email already exists");

  const hashedPassword = await bcrypt.hash(password, 10);
  const createdUser = await userRepo.createUser({
    name,
    email,
    password: hashedPassword,
    role,
  });

  const token = generateAccessToken(createdUser);
  const refreshToken = generateRefreshToken(createdUser);
  const { password: _, ...user } = createdUser;

  return { user, token, refreshToken };
};

export const login = async ({ email, password }) => {
  const existingUser = await userRepo.findUserByEmail(email);
  if (!existingUser) throw new Error("Invalid Email");

  const isMatch = await bcrypt.compare(password, existingUser.password);
  if (!isMatch) throw new Error("Invalid credentials");

  const token = generateAccessToken(existingUser);
  const refreshToken = generateRefreshToken(existingUser);
  const { password: _, ...user } = existingUser;

  return { user, token, refreshToken };
};
