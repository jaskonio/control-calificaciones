import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/database';
import { User } from './User';
import { Tutor } from './Tutor';

class Student extends Model {
  public id!: number;
  public firstName!: string;
  public lastName!: string;
  public birthDate!: Date;
  public tutorId!: number
  public userId!: number;

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
    birthDate: {
      type: new DataTypes.DATE,
      allowNull: false,
    },
    tutorId: {
      type: DataTypes.INTEGER.UNSIGNED,
      references: {
        model: Tutor,
        key: 'id',
      },
      allowNull: false,
    },
    userId: {
      type: DataTypes.INTEGER.UNSIGNED,
      references: {
        model: User,
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
