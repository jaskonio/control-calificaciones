import { Request, Response, NextFunction } from 'express';

const errorHandler = (err: Error, req: Request, res: Response, next: NextFunction): void => {
  console.error(err.message);
  res.status(500).json({ message: 'An unexpected error occurred.' });
};

export default errorHandler;
