import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/database';
import { Subject } from './Subject';
import { AcademicPeriod } from './AcademicPeriod';


class EvaluativeActivity extends Model {
  public id!: number;
  public name!: string;
  public desciption!: string;
  public weight!: number;
  public subjectId!: number;
  public acedemicPeriodId!: number;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

EvaluativeActivity.init(
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
    desciption: {
      type: new DataTypes.STRING(200),
      allowNull: false,
    },
    weight: {
        type: new DataTypes.INTEGER,
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
    acedemicPeriodId: {
      type: DataTypes.INTEGER.UNSIGNED,
      references: {
          model: AcademicPeriod,
          key: 'id',
      },
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: 'evaluative_activities',
    timestamps: true,
  }
);

export { EvaluativeActivity };
