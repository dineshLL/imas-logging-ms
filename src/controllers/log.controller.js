import SenecaManager from '../transport/seneca.manager';

export default class LogController {

  constructor() {
    this.seneca = SenecaManager.seneca;
  }

  logData = (data) => {
    console.log('started logging');
    return new Promise((resolve, reject) => {
      console.log('data ', data);
      resolve();
    });
  }

}
