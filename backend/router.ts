import { PrismaClient } from '@prisma/client';
import express, { Request, Response } from 'express';

const router = express.Router();
const prisma = new PrismaClient();

router.get('/health', (_req, res) => {
 return res.status(200).send('ok')
})

router.get('/users', async (req: Request, res: Response) => {
 try {
  const users = await prisma.user.findMany();
  res.status(200).json(users);
 } catch (error) {
  console.error(error);
  res.status(500).send('Internal Server Error');
 }
});

router.get('/logged', async (req: Request, res: Response) => {
 try {
  const loggedTimes = await prisma.loggedTimes.findMany();
  res.status(200).json(loggedTimes);
 } catch (err) {
  console.log(err);
  res.status(500).send('Internal Server Error')
 }
})

router.get('/commitments', async (req: Request, res: Response) => {
 try {
  const timeCommitments = await prisma.timeCommitments.findMany();
  res.status(200).json(timeCommitments);
 } catch (err) {
  console.log(err);
  res.status(500).send('Internal Server Error')
 }
})

router.get('/tracked-times', async (req: Request, res: Response) => {
 try {
  const currentDate = new Date();

  // Get dates for previous periods
  const oneDayAgo = new Date(currentDate);
  oneDayAgo.setDate(currentDate.getDate() - 1);

  const oneWeekAgo = new Date(currentDate);
  oneWeekAgo.setDate(currentDate.getDate() - 7);

  const oneMonthAgo = new Date(currentDate);
  oneMonthAgo.setMonth(currentDate.getMonth() - 1);

  // Get dates for the periods before that (previous periods)
  const twoDaysAgo = new Date(oneDayAgo);
  twoDaysAgo.setDate(oneDayAgo.getDate() - 1);

  const twoWeeksAgo = new Date(oneWeekAgo);
  twoWeeksAgo.setDate(oneWeekAgo.getDate() - 7);

  const twoMonthsAgo = new Date(oneMonthAgo);
  twoMonthsAgo.setMonth(oneMonthAgo.getMonth() - 1);

  const timeCommitments = await prisma.timeCommitments.findMany({
   include: {
    loggedTimes: true,
   },
  });

  const formattedData = timeCommitments.map((commitment) => {
   // Filter logged times for each time frame
   const dailyCurrent = commitment.loggedTimes
    .filter((log) => log.createdAt >= oneDayAgo)
    .reduce((sum, log) => sum + log.hours, 0);

   const dailyPrevious = commitment.loggedTimes
    .filter((log) => log.createdAt >= twoDaysAgo && log.createdAt < oneDayAgo)
    .reduce((sum, log) => sum + log.hours, 0);

   const weeklyCurrent = commitment.loggedTimes
    .filter((log) => log.createdAt >= oneWeekAgo)
    .reduce((sum, log) => sum + log.hours, 0);

   const weeklyPrevious = commitment.loggedTimes
    .filter((log) => log.createdAt >= twoWeeksAgo && log.createdAt < oneWeekAgo)
    .reduce((sum, log) => sum + log.hours, 0);

   const monthlyCurrent = commitment.loggedTimes
    .filter((log) => log.createdAt >= oneMonthAgo)
    .reduce((sum, log) => sum + log.hours, 0);

   const monthlyPrevious = commitment.loggedTimes
    .filter((log) => log.createdAt >= twoMonthsAgo && log.createdAt < oneMonthAgo)
    .reduce((sum, log) => sum + log.hours, 0);

   return {
    title: commitment.name,
    timeframes: {
     daily: {
      current: dailyCurrent,
      previous: dailyPrevious,
     },
     weekly: {
      current: weeklyCurrent,
      previous: weeklyPrevious,
     },
     monthly: {
      current: monthlyCurrent,
      previous: monthlyPrevious,
     },
    },
   };
  });

  res.json(formattedData);
 } catch (error) {
  console.error(error);
  res.status(500).json({ error: 'Internal Server Error' });
 }
});

router.post('/logged', async (req: Request, res: Response) => {
 try {
  const { createdAt, hours, timeCommitmentsId } = req.body;

  if (!createdAt || !hours || !timeCommitmentsId) {
   return res.status(400).json({ error: "All fields required: createAt, hours, timeCommitmentsId" })
  }

  const loggedTime = await prisma.loggedTimes.create({
   data: {
    createdAt: new Date(createdAt),
    hours,
    timeCommitmentsId
   },

  })

  res.status(201).json(loggedTime);
 } catch (error) {
  res.status(500).send({ error: "Failed to create logged time." })
 }
})


export default router;