/*
* Import the actual express application from app.js and start the application.
*/

const app = require('./app') // Our express app
const http = require('http')
const config = require('./utils/config')
const logger = require('./utils/logger')

const server = http.createServer(app)

server.listen(config.PORT, () => {
    logger.info(`Express server running on port ${config.PORT}`)
})