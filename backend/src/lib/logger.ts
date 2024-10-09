const logger = {
    log(message: any) {
        console.log(message)
    },
    error(err: Error) {
        console.error(err)
    },
}

export default logger
