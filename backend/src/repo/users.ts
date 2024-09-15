import { createToken, hash } from "#src/lib/auth.js"
import db, { Repo } from "#src/repo/db.js"
import { User } from "@prisma/client"
import { PrismaClient } from "@prisma/client/extension"

export class UsersRepo extends Repo {
    constructor(db: PrismaClient) {
        super(db)
    }

    async findByUUID(uuid: string): Promise<User | null | Error> {
        try {
            return this.db.user.findUnique({
                where: {
                    uuid,
                },
            })
        } catch (err) {
            return err as Error
        }
    }

    async create(params: CreateUserPrams): Promise<User | Error> {
        try {
            const tokenPlainText = createToken()
            const tokenHash = await hash(tokenPlainText)

            if (tokenHash instanceof Error) {
                return tokenHash
            }

            const created = await this.db.user.create({
                data: {
                    uuid: params.uuid,
                    name: params.name,
                    token: tokenHash,
                    lastActiveAt: new Date(),
                },
            })

            created.token = tokenPlainText
           
            return created
        } catch (err) {
            return err as Error
        }
    }
}

type CreateUserPrams = {
    uuid: string
    name: string
}

const usersRepo = new UsersRepo(db)

export default usersRepo
