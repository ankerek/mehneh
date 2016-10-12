import Router from 'koa-router';

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

router.use(apiRouter.routes());

export default router;