import Koa from 'koa';
import Sequelize from 'sequelize';
import logger from 'koa-logger';
import config from '../configs';
import router from './routes'

import ProductModel from './api/products/model';

const db = new Sequelize(
  config.database.name,
  config.database.username,
  config.database.password,
  ...config.database.sequelize
);

const Product = db.define('product', ProductModel);

Product.findOne().then(function (p) {
  console.log(p.get('name'));
});



const app = new Koa();

app.use(logger());

app.use(router.routes());



app.listen(config.port, () => console.log(`Server started: http://${config.host}:${config.port}/`));


// webpack dev server for hot reloading
if(config.env === 'development') {
  require('./dev-server');
}

export default app
