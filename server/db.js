import fs from 'fs';
import path from 'path';
import Sequelize from 'sequelize';
import config from '../configs';

export let models = {};

const sequelize = new Sequelize(
  config.database.name,
  config.database.username,
  config.database.password,
  ...config.database.sequelize
);

const walk = dir => {
  fs
  .readdirSync(dir)
  .forEach(file => {
    if(file === 'model.js') {
      const model = sequelize.import(path.join(dir, file));
      models[model.name] = model;
    } else {
      file = dir + '/' + file;
      const stat = fs.statSync(file);
      if(stat.isDirectory()) walk(file);
    }
  })
}

walk(__dirname + '/api');

Object.keys(models).forEach(function (modelName) {
  if (models[modelName].options.hasOwnProperty('associate')) {
    models[modelName].options.associate(models);
  }
});

export default sequelize;