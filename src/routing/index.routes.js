import LogController from '../controllers/log.controller';

class RoutingHandler {

  constructor() {
    this.logCtrl = new LogController();
  }

  dataLogHandler = (args, reply) => {
    this.logCtrl.logData(args)
    .then((pensionerId) => {
      reply(null, {
        code: 200,
        message: 'log completed'
      });
    })
    .catch((err) => {
      reply(err, {code: '500', message: 'internal error occured'});
    });
  }

}

const routes = new RoutingHandler();
export default routes;
