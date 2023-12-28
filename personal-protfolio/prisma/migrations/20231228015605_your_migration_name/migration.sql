-- AlterTable
ALTER TABLE "Message" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- CreateIndex
CREATE INDEX "Message_createdAt_idx" ON "Message"("createdAt");
