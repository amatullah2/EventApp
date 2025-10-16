const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('events_db', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
  logging: false,
});

const Event = require('./event')(sequelize);

module.exports = { sequelize, Event };
