// // Import Prisma Client to interact with the database
// import prisma from "../lib/prisma.js";

// // Only DB logic lives here
// export const getAllWhyChooseUsService = async () => {
//   return await prisma.whychooseus.findMany();
// };

import { PrismaClient } from "@prisma/client";
// import prisma from "../lib/prisma.js";

const prisma = new PrismaClient();

export const getAllWhyChooseUsService = async () => {
  return await prisma.whyChooseUs.findMany({
    include: {
      items: true,
    },
  });

};
