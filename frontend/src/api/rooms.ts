import type { APIResponse } from "#src/api/base"
import api from "#src/api/base"
import { wrapWithCatch } from "#src/lib/exception_to_value"

export type GetAllRoomsAPIRes = APIResponse<
    {
        uuid: string
        ownerId: string
        name: string
        occupancy: number
        createdAt: Date
        updatedAt: Date
    }[]
>

export const getAllRooms = wrapWithCatch(async function () {
    const res = await api.get<GetAllRoomsAPIRes>("rooms").json()

    // Change the date strings to date objects
    res.data = res.data.map((room) => {
        room.createdAt = new Date(room.createdAt)
        room.updatedAt = new Date(room.updatedAt)

        return room
    })

    return res
})

export type CreateRoomParams = {
    name: string
}

export type CreateRoomRes = APIResponse<GetAllRoomsAPIRes["data"][number]>

export const createRoom = wrapWithCatch(async function (
    params: CreateRoomParams,
) {
    const res = await api
        .post<CreateRoomRes>("rooms", {
            json: params,
        })
        .json()

    res.data.createdAt = new Date(res.data.createdAt)
    res.data.updatedAt = new Date(res.data.updatedAt)

    return res
})
