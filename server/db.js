import fs from 'fs';
import path from 'path';
import Sequelize from 'sequelize';
import config from '../configs';

export let models = {};

// database connection configuration
const sequelize = new Sequelize(
  config.database.name,
  config.database.username,
  config.database.password,
  ...config.database.sequelize
);

// read api directory and import model.js files
const walk = dir => {
  fs
  .readdirSync(dir)
  .forEach(file => {
    if(file === 'model.js') {
      const model = sequelize.import(path.join(dir, file));
      models[model.name] = model;
    } else {
      file = path.join(dir, file);
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