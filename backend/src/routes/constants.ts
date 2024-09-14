import { z } from "zod"

const MAX_NAME_LENGTH = 50

export const identifyBodySchema = z.object({
    uuid: z.string().uuid(),
    name: z
        .string()
        .max(MAX_NAME_LENGTH, `Maximum length allowed is ${MAX_NAME_LENGTH}`),
})

export type IdentifyBody = z.infer<typeof identifyBodySchema>
export type IdentifyRoute = {
    Body: IdentifyBody
}
