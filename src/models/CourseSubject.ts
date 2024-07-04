import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/database';
import { Student } from './Student';
import { Subject } from './Subject';

class CourseSubject extends Model {
  public id!: number;
  public courseId!: number;
  public studentId!: number;
  public subjectId!: number;
  public teacherId!: number;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

CourseSubject.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    value: {
      type: DataTypes.DECIMAL(5, 2),
      allowNull: false,
    },
    studentId: {
      type: DataTypes.INTEGER.UNSIGNED,
      references: {
        model: Student,
        key: 'id',
      },
      allowNull: false,
    },
    subjectId: {
      type: DataTypes.INTEGER.UNSIGNED,
      references: {
        model: Subject,
        key: 'id',
      },
      allowNull: false,
    },
    period: {
      type: new DataTypes.STRING(20),
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: 'course_subjects',
    timestamps: true,
  }
);

export { CourseSubject };
