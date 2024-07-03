import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/database';
import { Course } from './Course';

class Student extends Model {
  public id!: number;
  public firstName!: string;
  public lastName!: string;
  public courseId!: number;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Student.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    firstName: {
      type: new DataTypes.STRING(50),
      allowNull: false,
    },
    lastName: {
      type: new DataTypes.STRING(50),
      allowNull: false,
    },
    courseId: {
      type: DataTypes.INTEGER.UNSIGNED,
      references: {
        model: Course,
        key: 'id',
      },
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: 'students',
    timestamps: true,
  }
);

export { Student };
