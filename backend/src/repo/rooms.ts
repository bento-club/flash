import db, { Repo } from "#src/repo/db.js"
import { PrismaClient, Room as RoomModel } from "@prisma/client"

export class RoomsRepo extends Repo {
    constructor(db: PrismaClient) {
        super(db)
    }

    async create(params: CreateRoomParams): Promise<RoomModel | Error> {
        try {
            return db.room.create({
                data: {
                    name: params.name,
                    ownerId: params.ownerId,
                    SDPOffer: JSON.stringify(params.SDPOffer),
                },
            })
        } catch (err) {
            return err as Error
        }
    }

    async findByOwnerID(uuid: string): Promise<Room[] | Error> {
        try {
            const res = await this.db.room.findMany({
                where: {
                    ownerId: uuid,
                },
            })

            return res.map((item) => {
                const formattedItem = item as unknown as Room
                formattedItem.SDPOffer = JSON.parse(item.SDPOffer)

                return formattedItem
            })
        } catch (err) {
            return err as Error
        }
    }
}

export type Room = Omit<RoomModel, "SDPOffer"> & {
    SDPOffer: SDPOffer
}

export type SDPOffer = {
    type: "offer"
    sdp: string
}

export type CreateRoomParams = {
    ownerId: string
    name: string
    SDPOffer: SDPOffer
}

const roomsRepo = new RoomsRepo(db)

export default roomsRepo
