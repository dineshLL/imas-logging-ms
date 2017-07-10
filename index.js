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
    var seneca = this;
    this.add({ role: 'log', cmd: 'data' }, function(msg, reply) {
      
      console.log('calling service-3')
      seneca.act({ role: 'service-3', cmd: 'get', payload: 'this is data for the service 3' },
        function (err, response) {
          if (err) {
            console.log('error occured service-3, this is from the logger service')
          } else console.log(response)
        });
      
      reply({message: 'this is from the logger'})
    });

  });

seneca.listen({ type: 'redis-queue', pin: 'role: log, cmd:*' })
