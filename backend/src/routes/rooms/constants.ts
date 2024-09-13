import { z } from "zod"

export type GetAllRoomsParams = {
    roomId: string
}

export type GetAllRoomsRoute = {
    Params: GetAllRoomsParams
}

export const createRoomBodySchema = z.object({
    ownerId: z.string(),
    name: z.string(),
})

export type CreateRoomBody = z.output<typeof createRoomBodySchema>

export type CreateRoomRoute = {
    Body: CreateRoomBody
}
