import roomsRepo, { CreateRoomParams, RoomsRepo } from "#src/repo/rooms.js"
import { Room } from "@prisma/client"

export class RoomsService {
    roomsRepo: RoomsRepo

    constructor(
        roomsRepo: RoomsRepo
    ) {
        this.roomsRepo = roomsRepo
    }

    async listRoomsOfUser(uuid: string): Promise<Room[] | Error> {
        return roomsRepo.findByOwnerID(uuid)
    }

    async createRoom(params: CreateRoomParams): Promise<Room | Error> {
        return this.roomsRepo.create(params)
    }
}

const roomsService = new RoomsService(roomsRepo)

export default roomsService

