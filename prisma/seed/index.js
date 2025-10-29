const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function seedWhyChooseUs() {
  const seed = require("./seedWhyChooseUs");
  await seed(prisma);
}

async function main() {
  console.log("🌱 Starting seeding...");
  await seedWhyChooseUs();
  console.log("✅ All seeds completed!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
