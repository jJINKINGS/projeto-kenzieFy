/*
  Warnings:

  - You are about to drop the column `birtDate` on the `Musician` table. All the data in the column will be lost.
  - Changed the type of `joined` on the `GroupMember` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "GroupMember" DROP COLUMN "joined",
ADD COLUMN     "joined" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Musician" DROP COLUMN "birtDate",
ADD COLUMN     "birthDate" DATE;
