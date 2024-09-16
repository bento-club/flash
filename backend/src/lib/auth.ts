import bcrypt from "bcrypt"
import { randomUUID } from "crypto"
import { FastifyInstance } from "fastify"
import basicAuthPlugin from "@fastify/basic-auth"
import usersRepo from "#src/repo/users.js"

/**
 * Provide functions cryptographic security functions
 */
const SALT_ROUNDS = 10

/**
 * Hash a password for storage
 */
export async function hash(plainText: string): Promise<string | Error> {
    try {
        return bcrypt.hash(plainText, SALT_ROUNDS)
    } catch (error) {
        return error as Error
    }
}

/**
 * Compare a hashed and plain text to see if they match
 */
export async function compareToken(
    plainText: string,
    hash: string
): Promise<boolean> {
    return bcrypt.compare(plainText, hash)
}

/**
 * Create a token for authentication
 */
export function createToken(): string {
    return randomUUID()
}

export const AUTH_REALM = "flash-app"

/**
 * Decorate the fastify server instance with basic auth authentication scheme
 */
export function decorateWithBasicAuth(fastify: FastifyInstance) {
    fastify.register(basicAuthPlugin, {
        authenticate: {
            realm: AUTH_REALM,
        },
        async validate(username, password, _req, reply) {
            const user = await usersRepo.findByUUID(username)
            console.log("username: ", username)
            console.log("password: ", password)

            if (user instanceof Error || !user) {
                return reply.unauthorized("User not found")
            }

            const isValidPassword = await compareToken(password, user.token)

            if (!isValidPassword) {
                return reply.unauthorized("Invalid password")
            }
        },
    })
}
