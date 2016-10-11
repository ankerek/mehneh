import Koa from 'koa';
import config from './config'

const app = new Koa();

app.use(async (ctx) => {
  ctx.body = 'Hello World'
})

app.listen(3000, () => console.log('server started 3000'));


// webpack dev server for hot reloading
if(config.env === 'development') {
  require('../webpack/dev-server');
}

export default app