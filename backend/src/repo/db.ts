import { PrismaClient } from "@prisma/client"

const db = new PrismaClient()

export class Repo {
    db: PrismaClient

    constructor(db: PrismaClient) {
        this.db = db
    }
}

export default db
