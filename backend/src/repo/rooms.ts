import db from "@/repo/db.js"
import { PrismaClient } from "@prisma/client"

class RoomsRepo {
    db: PrismaClient

    constructor(db: PrismaClient) {
        this.db = db
    }

    async create(params: CreateRoomParams, db: PrismaClient = this.db) {
        return db.room.create({
            data: {
                name: params.name,
                ownerId: params.ownerId,
            },
        })
    }
}

type CreateRoomParams = {
    ownerId: string
    name: string
}

const roomsRepo = new RoomsRepo(db)

export default roomsRepo
