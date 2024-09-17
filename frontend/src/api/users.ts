import api, { type APIResponse } from "#src/api/base"
import { wrapWithCatch } from "#src/lib/exception_to_value"

export type IdentifyPayload = {
    uuid: string
    name: string
    token?: string
}

export type IdentifyRes = {
    uuid: string
    name: string
    token?: string
}

export const identify = wrapWithCatch(async function (
    payload: IdentifyPayload,
) {
    const res = await api.post<APIResponse<IdentifyRes>>("identify", {
        json: payload,
    })

    return res.json()
})

