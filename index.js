import routes from './src/routing/index.routes'
import emmitor from './src/event-emmitor/emittor'
import store from './src/event-emmitor/imas.store'

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

  this.add({role: 'log', cmd: 'data'}, routes.insertHandler);

});

seneca.on('act-in', (actionArgs) => {
  if(actionArgs.imas) store.setData(actionArgs.imas)
});

seneca.listen({type: 'redis-queue', pin: 'role: log, cmd:*'})
