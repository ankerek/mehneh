import Koa from 'koa';
import logger from 'koa-logger';
import config from '../configs';
import router from './routes'

const app = new Koa();

app.use(logger());

app.use(router.routes());



app.listen(config.port, () => console.log(`Server started: http://${config.host}:${config.port}/`));


// webpack dev server for hot reloading
if(config.env === 'development') {
  require('./dev-server');
}

export default app