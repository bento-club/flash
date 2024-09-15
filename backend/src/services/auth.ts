import { compareToken } from "#src/lib/auth.js"
import logger from "#src/lib/logger.js"
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
                logger.error(user)

                return new Error("User not found")
            }

            if (user) {
                if (!params.token) {
                    return new Error("Token is missing")
                }

                const isValidToken = await compareToken(
                    params.token,
                    user.token
                )

                if (!isValidToken) {
                    return new Error("Invalid token")
                }

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
            logger.error(error as Error)

            return new Error("Identifying user failed")
        }
    }
}

type IdentifyParams = {
    uuid: string
    name: string
    token?: string
}

type IdentifyRes = {
    uuid: string
    name: string
    token?: string
}

const authService = new AuthService(db)

export default authService
