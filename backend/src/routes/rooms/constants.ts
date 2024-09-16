import { z } from "zod"

export type GetAllRoomsParams = {
    roomId: string
}

export type GetAllRoomsRoute = {
    Params: GetAllRoomsParams
}

export const createRoomBodySchema = z.object({
    name: z.string(),
})

export type CreateRoomBody = z.output<typeof createRoomBodySchema>

export type CreateRoomRoute = {
    Body: CreateRoomBody
}

export type CreateRoomRes = {
    uuid: string
    ownerId: string
    name: string
    occupancy: number
    createdAt: Date
    updatedAt: Date
}
