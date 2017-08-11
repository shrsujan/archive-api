import express from 'express'
import bodyParser from 'body-parser'
import http from 'http'
import log from 'winston-logger-setup'
import routes from './routes'
import config from '../config/config'

let app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use('/', routes)

let server = http.createServer(app)

server.listen(config.port)
server.on('error', (error) => {
  if (error.syscall !== 'listen') {
    throw error
  }

  let bind = typeof config.port === 'string'
    ? 'Pipe ' + config.port
    : 'Port ' + config.port

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      log.error(bind + ' requires elevated privileges', {})
      process.exit(1)
    case 'EADDRINUSE':
      log.error(bind + ' is already in use', {})
      process.exit(1)
    default:
      throw error
  }
})

server.on('listening', () => {
  let addr = server.address()
  let bind = typeof addr === 'string'
    ? 'pipe ' + addr
    : 'port ' + addr.port
  log.cnslLog.debug('Listening on ' + bind, {})
})

export default app
