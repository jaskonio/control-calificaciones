import { Sequelize } from "sequelize";
import { User } from "../models/User";
import { Teacher } from "../models/Teacher";
import { Student } from "../models/Student";
import { Tutor } from "../models/Tutor";


const sequelize = new Sequelize({
  database: process.env.DB_NAME || 'control_calificaciones',
  username: process.env.DB_USER || 'postgres',
  password: process.env.DB_PASSWORD || 'password',
  host: process.env.DB_HOST || 'localhost',
  dialect: 'postgres'
});

User.initialize(sequelize)
Teacher.initialize(sequelize)
Student.initialize(sequelize)
Tutor.initialize(sequelize)

export default sequelize;
