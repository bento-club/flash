import db from "#src/repo/db.js"
import usersRepo from "#src/repo/users.js"
import { PrismaClient } from "@prisma/client"

export class AuthService {
    db: PrismaClient

    constructor(db: PrismaClient) {
        this.db = db
    }

    async updateLastActiveToNow(uuid: string): Promise<Error | void> {
        try {
            await this.db.user.update({
                where: {
                    uuid,
                },
                data: {
                    lastActiveAt: new Date(),
                },
            })
        } catch (err) {
            return err as Error
        }
    }

    /**
     * Identify a user and issue token for them
     */
    async identify(params: IdentifyParams): Promise<IdentifyRes | Error> {
        try {
            const user = await usersRepo.findByUUID(params.uuid)

            if (user instanceof Error) {
                return user
            }

            if (user) {
                await this.updateLastActiveToNow(params.uuid)

                return {
                    uuid: user.uuid,
                    name: user.name,
                }
            }

            const newUser = await usersRepo.create({
                uuid: params.uuid,
                name: params.name,
            })

            if (newUser instanceof Error) {
                return newUser
            }

            return {
                uuid: newUser.uuid,
                name: newUser.name,
                token: newUser.token,
            }
        } catch (error) {
            return error as Error
        }
    }
}

type IdentifyParams = {
    uuid: string
    name: string
}

type IdentifyRes = {
    uuid: string
    name: string
    token?: string
}

const authService = new AuthService(db)

export default authService
