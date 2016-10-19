module.exports = {
  env: process.env.NODE_ENV || 'development',
  host: process.env.HOST || 'localhost',
  port: process.env.PORT || 3000,
  secret: 'tajnyKlic',
  authExpiration: 7 * 24 * 60 * 60,
  database : {
    name: 'mehneh',
    username: 'root',
    password: 'root',
    sequelize: {
      host: 'localhost',
      dialect: 'mysql',
      pool: {
        max: 5,
        min: 0,
        idle: 10000
      },
    }
  }
};
