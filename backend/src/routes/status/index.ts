import { FastifyPluginAsync } from "fastify"

const StatusCheck: FastifyPluginAsync = async (fastify): Promise<void> => {
    fastify.get("/", async function () {
        return {
            up: true,
        }
    })
}

export default StatusCheck
