import bcrypt from "bcrypt"
import { randomUUID } from "crypto"

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
