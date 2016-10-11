import Koa from 'koa';
import config from '../configs'

const app = new Koa();

app.use(async (ctx) => {
  ctx.body = 'Hello World'
})

app.listen(config.port, () => console.log(`Server started: http://${config.host}:${config.port}/`));


// webpack dev server for hot reloading
if(config.env === 'development') {
  require('./dev-server');
}

export default app