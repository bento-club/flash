import ky from "ky"

const api = ky.create({
    prefixUrl: "http://localhost:7000",
})

export type APIResponse<R = any> = {
    message: string
    data: R
}

export default api
