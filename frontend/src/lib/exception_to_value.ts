import { debounce } from "lodash"

export function isPromise<T>(obj: any): obj is Promise<T> {
    if (obj instanceof Promise) {
        return true
    }

    return (
        !!obj &&
        (typeof obj === "object" || typeof obj === "function") &&
        typeof obj.then === "function"
    )
}

export function wrapWithCatch<T extends (...args: any[]) => any>(
    fn: T,
): (
    ...args: Parameters<T>
) => ReturnType<T> extends Promise<any>
        ? Promise<Error | Awaited<ReturnType<T>>>
        : ReturnType<T> | Error {
    return (...args: Parameters<T>) => {
        try {
            const result = fn(...args)

            // If the function returns a Promise (asynchronous), handle it asynchronously
            if (isPromise(result)) {
                return result
                    .then((data) => data)
                    .catch((err) => err) as Promise<
                        Error | Awaited<ReturnType<T>>
                    >
            }

            // For synchronous functions, just return the result and null for error
            return result as ReturnType<T>
        } catch (err) {
            return err as any
        }
    }
}

/**
 * Error class for custom errors
 */
export class CustomError extends Error {
    readonly original?: Error

    constructor(msg?: string, original?: any) {
        super(msg)
        this.original = original
    }
}
