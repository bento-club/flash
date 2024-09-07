/**
 * Error class for custom errors
 */
export class BaseError extends Error {
    readonly original?: Error;

    constructor(msg?: string, original?: Error) {
        super(msg);
        this.original = original;
    }
}
