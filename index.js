import routes from './src/routing/index.routes'
import emmitor from './src/event-emmitor/emittor'

let seneca = require('seneca')()
seneca.use('./redis-queue-transport', {
  'redis-queue': {
    timeout: 22222,
    type: 'redis-queue',
    host: '192.168.99.100',
    port: 6379
  }
})

  .ready(function () {
    console.log('ready function called') //routes.insertHandler
    this.add({ role: 'log', cmd: 'data' }, function(msg, reply) {
      reply({message: 'this is fukcking done'})
    });

    this.add({ role: 'log', cmd: 'test' }, function(msg, reply) {
      reply('loggin done')
    });

  });

seneca.listen({ type: 'redis-queue', pin: 'role: log, cmd:*' })
