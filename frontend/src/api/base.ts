import { appState } from "#src/store/app"
import ky from "ky"

const api = ky.create({
    prefixUrl: import.meta.env.VITE_API_URL || "http://localhost:7000",
    hooks: {
        beforeRequest: [
            (request) => {
                if (!appState.uuid || !appState.token) {
                    return
                }

                const token = btoa(`${appState.uuid}:${appState.token}`)
                request.headers.set("Authorization", `Basic ${token}`)
            },
        ],
    },
})

export type APIResponse<R = any> = {
    message: string
    data: R
}

export default api
