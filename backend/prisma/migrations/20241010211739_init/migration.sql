-- CreateTable
CREATE TABLE "TimeCommitments" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "TimeCommitments_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "LoggedTimes" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "hours" INTEGER NOT NULL,
    "timeCommitmentsId" INTEGER NOT NULL,

    CONSTRAINT "LoggedTimes_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "LoggedTimes" ADD CONSTRAINT "LoggedTimes_timeCommitmentsId_fkey" FOREIGN KEY ("timeCommitmentsId") REFERENCES "TimeCommitments"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
