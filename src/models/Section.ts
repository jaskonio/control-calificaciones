import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/database';
import { Course } from './Course';


class Section extends Model {
  public id!: number;
  public name!: string;
  public courseId!: number;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Section.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: new DataTypes.STRING(100),
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
    tableName: 'Sections',
    timestamps: true,
  }
);

export { Section };
