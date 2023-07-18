/*
  Warnings:

  - You are about to drop the column `customerId` on the `Appointment` table. All the data in the column will be lost.
  - You are about to drop the column `service` on the `Appointment` table. All the data in the column will be lost.
  - You are about to drop the `Customer` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `ClientId` to the `Appointment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `ServiceId` to the `Appointment` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Appointment" DROP CONSTRAINT "Appointment_customerId_fkey";

-- AlterTable
ALTER TABLE "Appointment" DROP COLUMN "customerId",
DROP COLUMN "service",
ADD COLUMN     "ClientId" TEXT NOT NULL,
ADD COLUMN     "ServiceId" TEXT NOT NULL;

-- DropTable
DROP TABLE "Customer";

-- CreateTable
CREATE TABLE "Client" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL
);

-- CreateTable
CREATE TABLE "Service" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "cost" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Client_id_key" ON "Client"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Client_email_key" ON "Client"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Service_id_key" ON "Service"("id");

-- AddForeignKey
ALTER TABLE "Appointment" ADD CONSTRAINT "Appointment_ClientId_fkey" FOREIGN KEY ("ClientId") REFERENCES "Client"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Appointment" ADD CONSTRAINT "Appointment_ServiceId_fkey" FOREIGN KEY ("ServiceId") REFERENCES "Service"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
