import { FastifyPluginAsync } from "fastify"

export type GetAllRoomsParams = {
    roomId: string
}

export type GetAllRoomsRoute = {
    Params: GetAllRoomsParams
}

const Rooms: FastifyPluginAsync = async function (fastify): Promise<void> {
    fastify.get<GetAllRoomsRoute>("/:roomId", async function (req) {
        const { roomId } = req.params

        return {
            data: {
                rooms: [roomId],
                ip: req.ip,
            },
        }
    })
}

export default Rooms
