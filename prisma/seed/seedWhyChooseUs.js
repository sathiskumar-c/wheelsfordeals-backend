const { PrismaClient } = require("@prisma/client");
const fs = require("fs");
const path = require("path");
const prisma = new PrismaClient();

async function main() {
    const filePath = path.join(__dirname, '../../mock/why-choose-us.json');
    const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    await prisma.whyChooseUs.deleteMany();
    await prisma.whyChooseUs.create({
        data: {
            title: data.title,
            items: data.whychooseusdata,
        }
    });
    console.log('✅ Seeded WhyChooseUs data');
}

main()
    .catch(e => {
        console.error(e);
        process.exit(1);
    })
    .finally(() => prisma.$disconnect());
