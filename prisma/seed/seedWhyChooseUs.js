// import { PrismaClient } from "@prisma/client";
// import fs from "fs";

// const whyChooseUs = JSON.parse(fs.readFileSync("./mock/why-choose-us.json", "utf-8"));
// const prisma = new PrismaClient();

// async function seedWhyChooseUs() {
//     console.log("🧹 Deleting old WhyChooseUs...");
//     await prisma.whychooseus.deleteMany();

//     console.log("🧹 Create new WhyChooseUs...");
//     await prisma.whychooseus.createMany({ data: whyChooseUs });

//     console.log("✅ WhyChooseUs seeded successfully");
// }

// seedWhyChooseUs()
//     .catch((error) => {
//         console.error("❌ Failed to seed whychooseus:", error);
//         process.exit(1);
//     })
//     .finally(() => prisma.$disconnect());

import { PrismaClient } from "@prisma/client";
import fs from "fs";
const prisma = new PrismaClient();

const data = JSON.parse(fs.readFileSync("./mock/why-choose-us.json", "utf-8"));

async function main() {
    const section = await prisma.whyChooseUs.create({
        data: {
            title: data.title,
            items: {
                create: data.whychooseusdata,
            },
        },
    });

    console.log("✅ Seeded successfully!");
}

main()
    .catch((e) => console.error(e))
    .finally(() => prisma.$disconnect());
