import logger from "#src/lib/logger.js"
import { RawData, WebSocket } from "ws"
import { ZodSchema, ZodError, z } from "zod"

export class SocketRouter {
    routes: Partial<Record<string, SocketRouteDefinition>>

    static msgValidator = z.object({
        action: z.string(),
        payload: z.object({}).passthrough().optional(),
    })

    constructor() {
        this.routes = {}
    }

    add(definition: SocketRouteDefinition): void {
        this.routes[definition.action] = definition
    }

    remove(query: string): void {
        delete this.routes[query]
    }

    /**
     * Lookup handler for a message
     */
    lookup(msg: SocketMsg): SocketRouteDefinition | undefined {
        return this.routes[msg.action]
    }

    reply(data: Record<any, any>, socket: WebSocket) {
        socket.send(JSON.stringify(data))
    }

    /**
     * Handle a message with a handler if it's found
     */
    handle(msg: RawData, socket: WebSocket) {
        try {
            const parsed = SocketRouter.msgValidator.parse(
                JSON.parse(msg.toString())
            ) as SocketMsg
            const definition = this.routes[parsed.action]

            if (!definition) {
                this.reply(
                    {
                        message: "Action not found",
                        status: 404,
                    },
                    socket
                )

                return
            }

            if (definition.validator && parsed.payload) {
                parsed.payload = definition.validator.parse(parsed.payload)
            }

            definition.handler(parsed, socket)
        } catch (err) {
            if (err instanceof Error) {
                logger.error(err)

                if (err instanceof ZodError) {
                    this.reply(
                        {
                            message: "Validation failed",
                            status: 400,
                        },
                        socket
                    )
                } else {
                    this.reply(
                        {
                            message: err.message,
                            status: 500,
                        },
                        socket
                    )
                }
            } else {
                logger.error(
                    new Error("Unknown error happened SocketRouter.lookup")
                )
            }
        }
    }
}

export type SocketRouteHandler<Payload = any> = (
    msg: SocketMsg<Payload>,
    socket: WebSocket
) => void

export type SocketMsg<Payload = any> = {
    action: string
    payload: Payload
}

export type SocketRouteDefinition = {
    action: string
    handler: SocketRouteHandler
    validator?: ZodSchema
}
