import { AuthenticatedRequest } from "#src/lib/auth.js"
import logger from "#src/lib/logger.js"
import roomsService from "#src/rooms/services/rooms.js"
import {
    createRoomBodySchema,
    CreateRoomRes,
    CreateRoomRoute,
} from "#src/routes/rooms/constants.js"
import { FastifyPluginAsyncZod } from "fastify-type-provider-zod"

const Rooms: FastifyPluginAsyncZod = async function (fastify): Promise<void> {
    // fastify.get<GetAllRoomsRoute>(
    //     "/:roomId",
    //     {
    //         onRequest: fastify.basicAuth,
    //     },
    //     async function (req) {
    //         const { roomId } = req.params
    //
    //         return {
    //             data: {
    //                 rooms: [roomId],
    //                 ip: req.ip,
    //                 name: "room name",
    //             },
    //         }
    //     }
    // )

    fastify.post<CreateRoomRoute>(
        "/",
        {
            onRequest: fastify.basicAuth,
            schema: {
                body: createRoomBodySchema,
            },
        },
        async function (req, reply) {
            const { body, user } = req as AuthenticatedRequest<CreateRoomRoute>

            const created = await roomsService.createRoom({
                name: body.name,
                ownerId: user.uuid,
            })

            if (created instanceof Error) {
                logger.error(created)

                return reply.internalServerError(created.message)
            }

            const res: CreateRoomRes = {
                uuid: created.uuid,
                ownerId: created.ownerId,
                name: created.name,
                occupancy: created.occupancy,
                createdAt: created.createdAt,
                updatedAt: created.updatedAt,
            }

            return {
                message: "Room created",
                data: res,
            }
        }
    )
}

export default Rooms
