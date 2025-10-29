const fs = require("fs");
const path = require("path");

module.exports = async function (prisma) {
  const filePath = path.join(__dirname, "../../mock/why-choose-us.json");
  const data = JSON.parse(fs.readFileSync(filePath, "utf8"));

  // Clear existing records
  await prisma.whyChooseUs.deleteMany();

  // Insert new records
  await prisma.whyChooseUs.create({
    data: {
      title: data.title,
      items: data.whychooseusdata,
    },
  });

  console.log("✅ Seeded WhyChooseUs data");
};
