import Koa from 'koa';
import logger from 'koa-logger';
import config from '../configs';
import db from './db';
import router from './routes';

const app = new Koa();

app.use(logger());

app.use(router.routes());

db.sync().then(() => {
  app.listen(config.port, () => console.log(`Server started: http://${config.host}:${config.port}/`));

  // webpack dev server for hot reloading
  // if(config.env === 'development') {
  //   require('./dev-server');
  // }
});