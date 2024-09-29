/*
  Warnings:

  - You are about to drop the column `sdp` on the `rooms` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_rooms" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "uuid" TEXT NOT NULL,
    "owner_id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "occupancy" INTEGER NOT NULL DEFAULT 0,
    "sdpOffer" TEXT NOT NULL DEFAULT '',
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_rooms" ("created_at", "id", "name", "occupancy", "owner_id", "updated_at", "uuid") SELECT "created_at", "id", "name", "occupancy", "owner_id", "updated_at", "uuid" FROM "rooms";
DROP TABLE "rooms";
ALTER TABLE "new_rooms" RENAME TO "rooms";
CREATE UNIQUE INDEX "rooms_uuid_key" ON "rooms"("uuid");
CREATE UNIQUE INDEX "rooms_owner_id_uuid_id_key" ON "rooms"("owner_id", "uuid", "id");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
