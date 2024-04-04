import { prisma } from "../src/lib/prisma";

async function seed() {
  await prisma.event.create({
    data: {
      id: "2bdc8d78-731f-48ea-a7d5-8dc26fd4db79",
      title: "Unit Summit",
      slug: "unit-summit",
      details: "A Event for developers",
      maximumAttendees: 120,
    },
  });
}

seed().then(() => {
  console.log("Database seeded!");
  prisma.$disconnect();
});
