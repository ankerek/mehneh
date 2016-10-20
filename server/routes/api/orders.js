import Router from 'koa-router';

const mockOrders = [
  {
    id: 1,
    totalPrice: 123,
    items: [ {}, {} ,{}]
  }
];

const router = new Router({
  prefix: '/orders'
});

router.get('/', async ctx => {
  ctx.body = mockOrders;
});

export default router;
