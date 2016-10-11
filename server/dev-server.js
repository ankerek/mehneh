import webpack from 'webpack';
import WebpackDevServer from 'webpack-dev-server';
import webpackConfig from '../configs/webpack.dev.config';
import config from '../configs';

const port = config.port + 1;


const options = {
  publicPath: webpackConfig.output.publicPath,
  hot: true,
  historyApiFallback: true,
  stats: { 
    colors: true,
    chunks: false
  }
};

const compiler = webpack(webpackConfig);
const webpackDevServer = new WebpackDevServer(compiler, options);
    
webpackDevServer.listen(port, config.host, () => {
  console.log(`Webpack dev server started: http://${config.host}:${port}/`);
});

