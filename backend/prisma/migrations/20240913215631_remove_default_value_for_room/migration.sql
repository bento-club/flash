-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Room" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "uuid" TEXT NOT NULL,
    "owner_id" TEXT NOT NULL,
    "name" TEXT NOT NULL
);
INSERT INTO "new_Room" ("id", "name", "owner_id", "uuid") SELECT "id", "name", "owner_id", "uuid" FROM "Room";
DROP TABLE "Room";
ALTER TABLE "new_Room" RENAME TO "Room";
CREATE UNIQUE INDEX "Room_uuid_key" ON "Room"("uuid");
CREATE UNIQUE INDEX "Room_owner_id_key" ON "Room"("owner_id");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
