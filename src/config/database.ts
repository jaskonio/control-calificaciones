// src/config/database.ts

import { Sequelize } from 'sequelize-typescript';

const sequelize = new Sequelize({
  database: process.env.DB_NAME || 'control_calificaciones',
  username: process.env.DB_USER || 'postgres',
  password: process.env.DB_PASSWORD || 'password',
  host: process.env.DB_HOST || 'localhost',
  dialect: 'postgres',
  // models: [__dirname + '/../models'], // Ruta donde estarán definidos los modelos
});

export default sequelize;
