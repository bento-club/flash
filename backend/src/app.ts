import * as path from "path"
import AutoLoad, { AutoloadPluginOptions } from "@fastify/autoload"
import { FastifyPluginAsync } from "fastify"
import { fileURLToPath } from "url"
import { serializerCompiler, validatorCompiler } from "fastify-type-provider-zod"
import { decorateWithBasicAuth } from "#src/lib/auth.js"

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

export type AppOptions = {
    // Place your custom options for app below here.
} & Partial<AutoloadPluginOptions>

// Pass --options via CLI arguments in command to enable these options.
const options: AppOptions = {}

const app: FastifyPluginAsync<AppOptions> = async (
    fastify,
    opts
): Promise<void> => {
    // Place here your custom code!
    fastify.setValidatorCompiler(validatorCompiler)
    fastify.setSerializerCompiler(serializerCompiler)

    decorateWithBasicAuth(fastify)

    // Do not touch the following lines

    // This loads all plugins defined in plugins
    // those should be support plugins that are reused
    // through your application
    void fastify.register(AutoLoad, {
        dir: path.join(__dirname, "plugins"),
        options: opts,
        forceESM: true,
    })

    // This loads all plugins defined in routes
    // define your routes in one of these
    void fastify.register(AutoLoad, {
        dir: path.join(__dirname, "routes"),
        options: opts,
        forceESM: true,
    })
}

export default app
export { app, options }
