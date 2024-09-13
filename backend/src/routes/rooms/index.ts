import {
    createRoomBodySchema,
    CreateRoomRoute,
    GetAllRoomsRoute,
} from "#src/routes/rooms/constants.js"
import { FastifyPluginAsyncZod } from "fastify-type-provider-zod"
import roomsRepo from "#src/repo/rooms.js"

const Rooms: FastifyPluginAsyncZod = async function (fastify): Promise<void> {
    fastify.get<GetAllRoomsRoute>("/:roomId", async function (req) {
        const { roomId } = req.params

        return {
            data: {
                rooms: [roomId],
                ip: req.ip,
                name: "room name",
            },
        }
    })

    fastify.post<CreateRoomRoute>(
        "/",
        {
            schema: {
                body: createRoomBodySchema,
            },
        },
        async function (req) {
            const { body } = req

            const createdRoom = await roomsRepo.create({
                ownerId: body.ownerId,
                name: body.name,
            })

            return {
                data: createdRoom,
            }
        }
    )
}

export default Rooms
