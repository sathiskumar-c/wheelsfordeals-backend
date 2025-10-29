import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const createUser = async (data) => prisma.users.create({ data });

export const findUserByEmail = async (email) =>
  prisma.users.findUnique({
    where: { email, isActive: true, isDeleted: false },
  });

export const findUserById = async (id) =>
  prisma.users.findUnique({
    where: { userId: id, isActive: true, isDeleted: false },
    select: {
      password: false, // exclude password
      userId: true,
      name: true,
      email: true,
      role: true,
      createdAt: true,
      updatedAt: true,
    },
  });

export const getAllUsers = async (filters) => {
  const { search, role, page = 0, limit = 10 } = filters;

  const where = {
    AND: [
      search
        ? {
            OR: [
              { name: { contains: search, mode: "insensitive" } },
              { email: { contains: search, mode: "insensitive" } },
            ],
          }
        : {},
      role ? { role: role.toUpperCase() } : {},
    ],
    isActive: true,
    isDeleted: false,
  };

  const [users, total] = await Promise.all([
    prisma.users.findMany({
      where,
      skip: Number(page) * Number(limit),
      take: Number(limit),
      orderBy: { createdAt: "desc" },
      select: {
        password: false, // exclude password
        userId: true,
        name: true,
        email: true,
        role: true,
        createdAt: true,
        updatedAt: true,
      },
    }),
    prisma.users.count({ where }),
  ]);

  return { users, total };
};

export const updateUser = async (id, data) =>
  prisma.users.update({
    where: { userId: id },
    data,
    select: {
      password: false, // exclude password
      userId: true,
      name: true,
      email: true,
      role: true,
      createdAt: true,
      updatedAt: true,
    },
  });

export const deleteUser = async (id) =>
  prisma.users.update({
    where: { userId: id },
    data: { isActive: false, isDeleted: true, updatedAt: new Date() },
  });

export const getRole = async (id) =>
  prisma.users.findUnique({
    where: { userId: id, isActive: true, isDeleted: false },
    select: {
      password: false, // exclude password
      userId: false,
      name: false,
      email: false,
      role: true,
      createdAt: false,
      updatedAt: false,
    },
  });
