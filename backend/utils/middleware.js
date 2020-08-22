const logger = require('./logger')

// Log request information
const requestLogger = (request, response, next) => {
    logger.info('Method:', request.method)
    logger.info('Path:  ', request.path)
    logger.info('Body:  ', request.body)
    logger.info('---')
    next()
}

// If the request is an unknown endpoint, respond with 404 and error message
const unknownEndpoint = (request, response) => {
    response.status(404).json({ error: 'Unknown endpoint' })
}

// Handle errors
const errorHandler = (error, request, response, next) => {
    console.log('ERROR')

    if (error.name === 'CastError') {
        return response.status(400).json({ error: 'Malformatted id' })
    } else if (error.name === 'ValidationError') {
        return response.status(400).json({ error: error.message })
    } else if (error.name === 'JsonWebTokenError') {
        return response.status(401).json({ error: 'Invalid token' })
    }
    next(error)
}

module.exports = {
    requestLogger,
    unknownEndpoint,
    errorHandler
}