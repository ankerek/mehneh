import Router from 'koa-router';
import productsRouter from './api/products'
import ordersRouter from './api/orders'

const router = new Router();
const apiRouter = new Router({
  prefix: '/api'
});

router.get('/', async ctx => {
  ctx.body = 'hello world';
});

apiRouter.get('/', async ctx => {
  ctx.body = 'api';
});


apiRouter.use(productsRouter.routes());
apiRouter.use(ordersRouter.routes());

router.use(apiRouter.routes());

export default router;
