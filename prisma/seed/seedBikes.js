import { PrismaClient } from "@prisma/client";
import fs from "fs";

const prisma = new PrismaClient();

const bikes = JSON.parse(fs.readFileSync("./mock/bike.json", "utf-8"));

async function seedBikes() {
  console.log("🧹 Deleting old bikes...");
  await prisma.bike.deleteMany();

  console.log("🚴 Inserting new bikes...");
  await prisma.bike.createMany({ data: bikes });

  console.log("✅ Bikes seeded successfully");
}

seedBikes()
  .catch((err) => {
    console.error("❌ Failed to seed bikes:", err);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
