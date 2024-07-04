import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/database';


class AcademicPeriod extends Model {
  public id!: number;
  public name!: string;
  public startDate!: Date;
  public endDate!: Date;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

AcademicPeriod.init(
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
    startDate: {
        type: new DataTypes.DATE,
        allowNull: false,
    },
    endDate: {
        type: new DataTypes.DATE,
        allowNull: false,
    },
  },
  {
    sequelize,
    tableName: 'academic_periods',
    timestamps: true,
  }
);

export { AcademicPeriod };
