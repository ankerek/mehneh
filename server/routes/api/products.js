import Router from 'koa-router';
import { models } from '../../db';

const router = new Router({
  prefix: '/products'
});

router.get('/', async ctx => {
  //try {
    const products = await models.Product.findAll();
    ctx.body = products;
  // } catch (err) {
  //   console.log(err);
  // }
  
});

export default router;