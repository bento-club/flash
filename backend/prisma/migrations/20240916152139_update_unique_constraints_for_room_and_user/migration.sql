/*
  Warnings:

  - A unique constraint covering the columns `[owner_id,uuid,id]` on the table `rooms` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[uuid,token]` on the table `users` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "rooms_owner_id_key";

-- DropIndex
DROP INDEX "users_token_key";

-- CreateIndex
CREATE UNIQUE INDEX "rooms_owner_id_uuid_id_key" ON "rooms"("owner_id", "uuid", "id");

-- CreateIndex
CREATE UNIQUE INDEX "users_uuid_token_key" ON "users"("uuid", "token");
