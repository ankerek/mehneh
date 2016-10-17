import Router from 'koa-router';
import productsRouter from './api/products'

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

router.use(apiRouter.routes());

export default router;