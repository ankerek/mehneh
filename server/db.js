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

// read models directory and import models
fs
  .readdirSync(path.join(__dirname, 'models'))
  .filter(function(file) {
    return (file.indexOf(".") !== 0) && (file !== "index.js");
  })
  .forEach(function(file) {
    var model = sequelize.import(path.join(__dirname, 'models', file));
    models[model.name] = model;
  });

Object.keys(models).forEach(function (modelName) {
  if (models[modelName].options.hasOwnProperty('associate')) {
    models[modelName].options.associate(models);
  }
});

export default sequelize;