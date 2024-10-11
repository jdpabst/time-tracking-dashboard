import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
 await prisma.timeCommitments.createMany({
  data: [
   {
    "name": "work"
   },
   {
    "name": "play"
   },
   {
    "name": "study"
   },
   {
    "name": "exercise"
   },
   {
    "name": "social"
   },
   {
    "name": "selfCare"
   }
  ]

 });

 const commitments = await prisma.timeCommitments.findMany();

 const loggedTimesData = [
  { createdAt: "2024-09-09T08:00:00Z", hours: 24, timeCommitmentsId: commitments[0].id },
  { createdAt: "2024-09-10T08:00:00Z", hours: 24, timeCommitmentsId: commitments[0].id },
  { createdAt: "2024-09-11T08:00:00Z", hours: 24, timeCommitmentsId: commitments[0].id },
  { createdAt: "2024-09-20T08:00:00Z", hours: 24, timeCommitmentsId: commitments[0].id },
  { createdAt: "2024-09-21T08:00:00Z", hours: 24, timeCommitmentsId: commitments[0].id },
  { createdAt: "2024-09-22T08:00:00Z", hours: 8, timeCommitmentsId: commitments[0].id },
  { createdAt: "2024-10-03T08:00:00Z", hours: 12, timeCommitmentsId: commitments[0].id },
  { createdAt: "2024-10-04T08:00:00Z", hours: 12, timeCommitmentsId: commitments[0].id },
  { createdAt: "2024-10-05T08:00:00Z", hours: 12, timeCommitmentsId: commitments[0].id },
  { createdAt: "2024-10-07T08:00:00Z", hours: 5, timeCommitmentsId: commitments[0].id },
  { createdAt: "2024-10-08T08:00:00Z", hours: 5, timeCommitmentsId: commitments[0].id },
  { createdAt: "2024-10-09T08:00:00Z", hours: 7, timeCommitmentsId: commitments[0].id },
  { createdAt: "2024-10-10T08:00:00Z", hours: 8, timeCommitmentsId: commitments[0].id },
  { createdAt: "2024-10-11T08:00:00Z", hours: 7, timeCommitmentsId: commitments[0].id },
  { createdAt: "2024-10-15T08:00:00Z", hours: 15, timeCommitmentsId: commitments[0].id },
  { createdAt: "2024-10-16T08:00:00Z", hours: 15, timeCommitmentsId: commitments[0].id },
  { createdAt: "2024-10-17T08:00:00Z", hours: 5, timeCommitmentsId: commitments[0].id },
  { createdAt: "2024-10-08T08:00:00Z", hours: 2, timeCommitmentsId: commitments[1].id },
  { createdAt: "2024-10-09T08:00:00Z", hours: 1, timeCommitmentsId: commitments[1].id },
  { createdAt: "2024-10-07T08:00:00Z", hours: 3, timeCommitmentsId: commitments[1].id },
  { createdAt: "2024-10-05T08:00:00Z", hours: 8, timeCommitmentsId: commitments[1].id },
  { createdAt: "2024-10-15T08:00:00Z", hours: 3, timeCommitmentsId: commitments[1].id },
  { createdAt: "2024-10-12T08:00:00Z", hours: 3, timeCommitmentsId: commitments[1].id },
  { createdAt: "2024-10-15T08:00:00Z", hours: 3, timeCommitmentsId: commitments[1].id },
  { createdAt: "2024-09-08T08:00:00Z", hours: 8, timeCommitmentsId: commitments[1].id },
  { createdAt: "2024-09-12T08:00:00Z", hours: 8, timeCommitmentsId: commitments[1].id },
  { createdAt: "2024-09-13T08:00:00Z", hours: 8, timeCommitmentsId: commitments[1].id },
  { createdAt: "2024-09-14T08:00:00Z", hours: 5, timeCommitmentsId: commitments[1].id },
  { createdAt: "2024-10-09T08:00:00Z", hours: 0, timeCommitmentsId: commitments[2].id },
  { createdAt: "2024-10-08T08:00:00Z", hours: 1, timeCommitmentsId: commitments[2].id },
  { createdAt: "2024-10-06T08:00:00Z", hours: 3, timeCommitmentsId: commitments[2].id },
  { createdAt: "2024-09-30T08:00:00Z", hours: 2, timeCommitmentsId: commitments[2].id },
  { createdAt: "2024-10-01T08:00:00Z", hours: 3, timeCommitmentsId: commitments[2].id },
  { createdAt: "2024-10-02T08:00:00Z", hours: 2, timeCommitmentsId: commitments[2].id },
  { createdAt: "2024-10-11T08:00:00Z", hours: 4, timeCommitmentsId: commitments[2].id },
  { createdAt: "2024-09-08T08:00:00Z", hours: 3, timeCommitmentsId: commitments[2].id },
  { createdAt: "2024-09-09T08:00:00Z", hours: 4, timeCommitmentsId: commitments[2].id },
  { createdAt: "2024-09-10T08:00:00Z", hours: 3, timeCommitmentsId: commitments[2].id },
  { createdAt: "2024-09-02T08:00:00Z", hours: 4, timeCommitmentsId: commitments[2].id },
  { createdAt: "2024-09-01T08:00:00Z", hours: 3, timeCommitmentsId: commitments[2].id },
  { createdAt: "2024-10-09T08:00:00Z", hours: 1, timeCommitmentsId: commitments[3].id },
  { createdAt: "2024-10-08T08:00:00Z", hours: 1, timeCommitmentsId: commitments[3].id },
  { createdAt: "2024-10-10T08:00:00Z", hours: 1, timeCommitmentsId: commitments[3].id },
  { createdAt: "2024-10-11T08:00:00Z", hours: 1, timeCommitmentsId: commitments[3].id },
  { createdAt: "2024-10-01T08:00:00Z", hours: 1, timeCommitmentsId: commitments[3].id },
  { createdAt: "2024-10-02T08:00:00Z", hours: 1, timeCommitmentsId: commitments[3].id },
  { createdAt: "2024-10-03T08:00:00Z", hours: 1, timeCommitmentsId: commitments[3].id },
  { createdAt: "2024-10-04T08:00:00Z", hours: 1, timeCommitmentsId: commitments[3].id },
  { createdAt: "2024-10-05T08:00:00Z", hours: 1, timeCommitmentsId: commitments[3].id },
  { createdAt: "2024-10-22T08:00:00Z", hours: 1, timeCommitmentsId: commitments[3].id },
  { createdAt: "2024-10-19T08:00:00Z", hours: 1, timeCommitmentsId: commitments[3].id },
  { createdAt: "2024-09-01T08:00:00Z", hours: 5, timeCommitmentsId: commitments[3].id },
  { createdAt: "2024-09-03T08:00:00Z", hours: 5, timeCommitmentsId: commitments[3].id },
  { createdAt: "2024-09-09T08:00:00Z", hours: 5, timeCommitmentsId: commitments[3].id },
  { createdAt: "2024-09-07T08:00:00Z", hours: 3, timeCommitmentsId: commitments[3].id },
  { createdAt: "2024-10-09T08:00:00Z", hours: 1, timeCommitmentsId: commitments[4].id },
  { createdAt: "2024-10-08T08:00:00Z", hours: 3, timeCommitmentsId: commitments[4].id },
  { createdAt: "2024-10-07T08:00:00Z", hours: 1, timeCommitmentsId: commitments[4].id },
  { createdAt: "2024-10-01T08:00:00Z", hours: 3, timeCommitmentsId: commitments[4].id },
  { createdAt: "2024-10-03T08:00:00Z", hours: 2, timeCommitmentsId: commitments[4].id },
  { createdAt: "2024-10-04T08:00:00Z", hours: 3, timeCommitmentsId: commitments[4].id },
  { createdAt: "2024-10-05T08:00:00Z", hours: 2, timeCommitmentsId: commitments[4].id },
  { createdAt: "2024-10-31T08:00:00Z", hours: 3, timeCommitmentsId: commitments[4].id },
  { createdAt: "2024-10-26T08:00:00Z", hours: 3, timeCommitmentsId: commitments[4].id },
  { createdAt: "2024-09-09T08:00:00Z", hours: 1, timeCommitmentsId: commitments[4].id },
  { createdAt: "2024-09-08T08:00:00Z", hours: 3, timeCommitmentsId: commitments[4].id },
  { createdAt: "2024-09-07T08:00:00Z", hours: 1, timeCommitmentsId: commitments[4].id },
  { createdAt: "2024-09-01T08:00:00Z", hours: 3, timeCommitmentsId: commitments[4].id },
  { createdAt: "2024-09-03T08:00:00Z", hours: 2, timeCommitmentsId: commitments[4].id },
  { createdAt: "2024-09-04T08:00:00Z", hours: 3, timeCommitmentsId: commitments[4].id },
  { createdAt: "2024-09-05T08:00:00Z", hours: 2, timeCommitmentsId: commitments[4].id },
  { createdAt: "2024-09-30T08:00:00Z", hours: 3, timeCommitmentsId: commitments[4].id },
  { createdAt: "2024-09-26T08:00:00Z", hours: 3, timeCommitmentsId: commitments[4].id },
  { createdAt: "2024-09-17T08:00:00Z", hours: 2, timeCommitmentsId: commitments[4].id },
  { createdAt: "2024-10-09T08:00:00Z", hours: 0, timeCommitmentsId: commitments[5].id },
  { createdAt: "2024-10-08T08:00:00Z", hours: 1, timeCommitmentsId: commitments[5].id },
  { createdAt: "2024-10-11T08:00:00Z", hours: 1, timeCommitmentsId: commitments[5].id },
  { createdAt: "2024-10-02T08:00:00Z", hours: 1, timeCommitmentsId: commitments[5].id },
  { createdAt: "2024-10-04T08:00:00Z", hours: 1, timeCommitmentsId: commitments[5].id },
  { createdAt: "2024-10-22T08:00:00Z", hours: 1, timeCommitmentsId: commitments[5].id },
  { createdAt: "2024-10-28T08:00:00Z", hours: 2, timeCommitmentsId: commitments[5].id },
  { createdAt: "2024-09-09T08:00:00Z", hours: 0, timeCommitmentsId: commitments[5].id },
  { createdAt: "2024-09-08T08:00:00Z", hours: 1, timeCommitmentsId: commitments[5].id },
  { createdAt: "2024-09-11T08:00:00Z", hours: 1, timeCommitmentsId: commitments[5].id },
  { createdAt: "2024-09-02T08:00:00Z", hours: 1, timeCommitmentsId: commitments[5].id },
  { createdAt: "2024-09-04T08:00:00Z", hours: 1, timeCommitmentsId: commitments[5].id },
  { createdAt: "2024-09-22T08:00:00Z", hours: 1, timeCommitmentsId: commitments[5].id },
  { createdAt: "2024-09-28T08:00:00Z", hours: 2, timeCommitmentsId: commitments[5].id },
  { createdAt: "2024-09-01T08:00:00Z", hours: 2, timeCommitmentsId: commitments[5].id },
  { createdAt: "2024-09-02T08:00:00Z", hours: 2, timeCommitmentsId: commitments[5].id },
 ];

 await prisma.loggedTimes.createMany({
  data: loggedTimesData,
 });

}

main()
 .catch(e => {
  console.error(e);
  process.exit(1);
 })
 .finally(async () => {
  await prisma.$disconnect();
 });
