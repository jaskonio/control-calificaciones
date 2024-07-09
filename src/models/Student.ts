import { Sequelize } from 'sequelize';
import { User } from './User';


class Student extends User {
  public static initialize(sequelize: Sequelize): void {
    super.initialize(sequelize);

    this.addScope('defaultScope', {
      where: {
        role: 'alumno'
      }
    });

    this.addHook('beforeValidate', (student: Student) => {
      student.role = 'alumno';
    });
  }
}

export { Student };
