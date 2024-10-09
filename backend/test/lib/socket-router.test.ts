import { SocketRouter } from "#src/lib/socket-router.js"
import assert from "node:assert"
import { beforeEach, describe, it, mock } from "node:test"
import { WebSocket } from "ws"

describe("socket-router", () => {
    let router: SocketRouter

    beforeEach(() => {
        router = new SocketRouter()
    })

    it("handler called once if action matches a registered action", async (t) => {
        const def = {
            action: "test",
            handler: () => {},
        }

        const mockHandler = t.mock.method(def, "handler", () => {
            console.log("test")
        })

        const mockSocket = {
            send: mock.fn(),
        } as unknown as WebSocket
        t.mock.method(mockSocket, "send", () => {})

        router.add(def)
        router.handle(
            Buffer.from(JSON.stringify({ action: "test" })),
            mockSocket
        )

        assert.strictEqual(mockHandler.mock.callCount(), 1)
    })
})
