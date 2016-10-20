import Router from 'koa-router';
import ordersRouter from './orders';
import productsRouter from './products';

const apiRouter = new Router({
  prefix: '/api'
});

apiRouter.get('/', async ctx => {
  ctx.body = 'api';
});

// TODO: auto read all files except index.js in this directory and use it
apiRouter.use(productsRouter.routes());
apiRouter.use(ordersRouter.routes());

export default apiRouter;