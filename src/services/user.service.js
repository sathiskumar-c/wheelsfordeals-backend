import * as userRepo from "../repositories/user.repository.js";

export const getUsers = async (filters) => {
  return await userRepo.getAllUsers(filters);
};

export const getUser = async (id) => {
  const user = await userRepo.findUserById(id);
  if (!user) return null; // handle not found
  return user;
};

export const updateUser = async (id, data) => {
  const user = await userRepo.updateUser(id, data);
  if (!user) return null;
  return user;
};

export const deleteUser = async (id) => {
  return await userRepo.deleteUser(id);
};

export const getRole = async (id) => {
  return await userRepo.getRole(id);
};
