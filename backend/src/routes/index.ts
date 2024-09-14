import { identifyBodySchema, IdentifyRoute } from "#src/routes/constants.js"
import authService from "#src/services/auth.js"
import { FastifyPluginAsyncZod } from "fastify-type-provider-zod"

const root: FastifyPluginAsyncZod = async (fastify): Promise<void> => {
    fastify.get("/", async function () {
        return "Nothing to see here. This is an API"
    })

    fastify.post<IdentifyRoute>(
        "/identify",
        {
            schema: {
                body: identifyBodySchema,
            },
        },
        async function (req) {
            const { body } = req

            const user = await authService.identify(body)

            if (user instanceof Error) {
                return fastify.httpErrors.unprocessableEntity(
                    "Creating user failed"
                )
            }

            return user
        }
    )
}

export default root
