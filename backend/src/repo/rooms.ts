import db, { Repo } from "#src/repo/db.js"
import { PrismaClient, Room } from "@prisma/client"

export class RoomsRepo extends Repo {
    constructor(db: PrismaClient) {
        super(db)
    }

    async create(
        params: CreateRoomParams,
    ): Promise<Room | Error> {
        try {
            return db.room.create({
                data: {
                    name: params.name,
                    ownerId: params.ownerId,
                },
            })
        } catch (err) {
            return err as Error
        }
    }

    async findByOwnerID(uuid: string): Promise<Room[] | Error> {
        try {
            return this.db.room.findMany({
                where: {
                    ownerId: uuid,
                },
            })
        } catch (err) {
            return err as Error
        }
    }
}

export type CreateRoomParams = {
    ownerId: string
    name: string
}

const roomsRepo = new RoomsRepo(db)

export default roomsRepo
