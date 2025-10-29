import * as authService from "../services/auth.service.js";

export const signup = async (req, res) => {
  try {
    const { user, token, refreshToken } = await authService.signup(req.body);

    // Set cookie
    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: 1000 * 60 * 60, // 1 hour
      sameSite: "Strict",
    });
    res.status(201).json({
      success: true,
      message: "User registered",
      data: user,
      token,
      refreshToken,
    });
  } catch (err) {
    res.status(400).json({ success: false, error: err.message });
  }
};

export const login = async (req, res) => {
  try {
    const { user, token, refreshToken } = await authService.login(req.body);
    // Set cookie
    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: 1000 * 60 * 60, // 1 hour
      sameSite: "Strict",
    });
    res.json({
      success: true,
      message: "Login successful",
      token,
      refreshToken,
      data: user,
    });
  } catch (err) {
    res.status(400).json({ success: false, error: err.message });
  }
};
