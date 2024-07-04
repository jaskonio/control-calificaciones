import express from 'express';
import sequelize from './config/database';
import userRoutes from './routes/userRoutes';
import subjectRoutes from './routes/subjectRoutes';
import courseRoutes from './routes/courseRoutes';
import gradeRoutes from './routes/gradeRoutes';
import studentRoutes from './routes/studentRoutes';
import teacherRoutes from './routes/teacherRoutes';
import authMiddleware from './middleware/authMiddleware';
import errorHandler from './middleware/errorHandler';
import loggerMiddleware from './middleware/loggerMiddleware';
import validationMiddleware from './middleware/validationMiddleware';

class App {
  public app: express.Application;
  public port: number;

  constructor(port: number) {
    this.app = express();
    this.port = port;
    this.initializeMiddlewares();
    this.initializeRoutes();

    this.initDatabase();
  }

  private initializeMiddlewares() {
    // Configurar middlewares aquí
    this.app.use(express.json());
    this.app.use(loggerMiddleware)
    this.app.use(authMiddleware)
    this.app.use(errorHandler)
  }

  private initializeRoutes() {
    this.app.use('/api/users', userRoutes);
    this.app.use('/api/subjects', subjectRoutes);
    this.app.use('/api/courses', courseRoutes);
    this.app.use('/api/students', studentRoutes);
    this.app.use('/api/teachers', teacherRoutes);
    this.app.use('/api/grades', gradeRoutes);
  }

  private async initDatabase() {
    try {
      await sequelize.authenticate();
      console.log('Conexión establecida correctamente con la base de datos.');

      // Sincronizar modelos con la base de datos
      await sequelize.sync({ alter: true });
      console.log('Modelos sincronizados correctamente con la base de datos.');
    } catch (error) {
      console.error('Error al conectar y sincronizar con la base de datos:', error);
    }
  }

  public listen() {
    this.app.listen(this.port, () => {
      console.log('Servidor corriendo en http://localhost:' + this.port);
    });
  }
}

export default App;