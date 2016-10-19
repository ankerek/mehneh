import Router from 'koa-router';
import { models } from '../../db';

const mockProducts = [
  { 
    id: 1,
    name: 'chipsy',
    priceVat: 19
  },
  {
    id: 2,
    name: 'Olma Mléko čerstvé 1,5% 1l',
    priceVat: 18.9
  },
  {
    id: 3,
    name: 'Kubík Čoko sušenky 32g',
    priceVat: 7.9
  }
];

const router = new Router({
  prefix: '/products'
});

router.get('/', async ctx => {
  try {
    const products = await models.Product.findAll();
    ctx.body = products;
  } catch(err) {
    console.log(err);
  }
  
});

export default router;