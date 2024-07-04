import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/database';
import { Student } from './Student';
import { Section } from './Section';

class Enrollment extends Model {
  public id!: number;
  public studentId!: number;
  public sectionId!: number;
  public academicPeriodId!: number;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Enrollment.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    studentId: {
        type: DataTypes.INTEGER.UNSIGNED,
        references: {
            model: Student,
            key: 'id',
        },
        allowNull: false,
    },
    sectionId: {
        type: DataTypes.INTEGER.UNSIGNED,
        references: {
            model: Section,
            key: 'id',
        },
        allowNull: false,
    },
    academicPeriodId: {
        type: DataTypes.INTEGER.UNSIGNED,
        references: {
            model: Section,
            key: 'id',
        },
        allowNull: false,
    },
  },
  {
    sequelize,
    tableName: 'enrollments',
    timestamps: true,
  }
);

export { Enrollment };
