import * as userService from "../services/user.service.js";

export const getUsers = async (req, res) => {
  try {
    const users = await userService.getUsers(req.query);
    res.json({ success: true, ...users });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};

export const getUser = async (req, res) => {
  try {
    const user = await userService.getUser(req.params.id);
    if (!user)
      return res
        .status(404)
        .json({ success: false, message: "User not found" });
    res.json({ success: true, user });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};

export const updateUser = async (req, res) => {
  try {
    const existingUser = await userService.getUser(req.params.id);
    if (!existingUser)
      return res
        .status(404)
        .json({ success: false, message: "User not found" });
    const user = await userService.updateUser(req.params.id, req.body);
    res.json({ success: true, message: "User updated", user });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};

export const deleteUser = async (req, res) => {
  try {
    await userService.deleteUser(req.params.id);
    res.json({ success: true, message: "User deleted" });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};
