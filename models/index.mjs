import { Sequelize } from 'sequelize';
import allConfig from '../config/config.js';

import bugModel from './bug.mjs';
import featureModel from './feature.mjs';

const env = process.env.NODE_ENV || 'development';

const config = allConfig[env];

const db = {};

let sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);

// add your model definitions to db here
db.Bug = bugModel(sequelize, Sequelize.DataTypes);
db.Feature = featureModel(sequelize, Sequelize.DataTypes);

/* DEFINE FEATURES AND BUGS DB RELATIONSHIP HERE */
db.Bug.belongsTo(db.Feature);
db.Feature.hasMany(db.Bug);

db.sequelize = sequelize;
db.Sequelize = Sequelize;

export default db;
