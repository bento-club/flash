import { z } from "zod"

export type GetAllRoomsRoute = {}

export const createRoomBodySchema = z.object({
    name: z.string(),
    SDPOffer: z.object({
        type: z.enum(["offer"]),
        sdp: z.string(),
    })
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

export type GetAllRoomsRes = {
    uuid: string
    ownerId: string
    name: string
    occupancy: number
    createdAt: Date
    updatedAt: Date
}[]
