// Import Prisma Client to interact with the database
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

// Only DB logic lives here
export const getAllBikesService = async () => {
    return await prisma.bike.findMany();
};
