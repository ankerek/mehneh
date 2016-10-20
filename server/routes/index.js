import Router from 'koa-router';
import apiRouter from './api';

const router = new Router();


router.get('/', async ctx => {
  ctx.body = 'hello world';
});

router.use(apiRouter.routes());

export default router;
