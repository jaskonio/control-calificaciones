import { Sequelize } from "sequelize";


const sequelize = new Sequelize({
  database: process.env.DB_NAME || 'control_calificaciones',
  username: process.env.DB_USER || 'postgres',
  password: process.env.DB_PASSWORD || 'password',
  host: process.env.DB_HOST || 'localhost',
  dialect: 'postgres'
});

export default sequelize;
