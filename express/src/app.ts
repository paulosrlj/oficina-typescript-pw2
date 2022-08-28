import express from 'express';
import {router} from './routes';

class App {
  app;

  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  routes() {
    this.app.use(router);
  }

  middlewares() {
    this.app.use(express.json());
    this.app.use(express.urlencoded({extended: true}))
  }
}


const app = new App().app;
app.listen(8000, () => console.log('Ouvindo na porta 8000'))