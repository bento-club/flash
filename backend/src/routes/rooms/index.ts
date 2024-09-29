import { AuthenticatedRequest } from "#src/lib/auth.js"
import logger from "#src/lib/logger.js"
import roomsService from "#src/rooms/services/rooms.js"
import {
    createRoomBodySchema,
    CreateRoomRes,
    CreateRoomRoute,
    GetAllRoomsRes,
    GetAllRoomsRoute,
} from "#src/routes/rooms/constants.js"
import { FastifyPluginAsyncZod } from "fastify-type-provider-zod"

const Rooms: FastifyPluginAsyncZod = async function (fastify): Promise<void> {
    fastify.get<GetAllRoomsRoute>(
        "/",
        {
            onRequest: fastify.basicAuth,
        },
        async function (req, reply) {
            const { user } = req as AuthenticatedRequest<GetAllRoomsRoute>

            const rooms = await roomsService.listRoomsOfUser(user.uuid)

            if (rooms instanceof Error) {
                logger.error(rooms)

                return reply.internalServerError()
            }

            const res: GetAllRoomsRes = rooms
                .map((room) => {
                    const result: GetAllRoomsRes[number] = {
                        uuid: room.uuid,
                        ownerId: room.ownerId,
                        name: room.name,
                        occupancy: room.occupancy,
                        createdAt: room.createdAt,
                        updatedAt: room.updatedAt,
                    }

                    return result
                })
                .sort((a, b) => b.updatedAt.getTime() - a.updatedAt.getTime())

            return {
                message: "Rooms found",
                data: res,
            }
        }
    )

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
                SDPOffer: body.SDPOffer,
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
