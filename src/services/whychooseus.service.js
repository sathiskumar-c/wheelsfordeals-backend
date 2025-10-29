import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getAllWhyChooseUsService = async () => {
  return await prisma.whyChooseUs.findMany();
};
