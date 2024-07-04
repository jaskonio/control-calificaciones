import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

const authMiddleware = (req: Request, res: Response, next: NextFunction): void => {
  // const token = req.headers['authorization'];
  // if (!token) {
  //   res.status(401).json({ message: 'Access denied. No token provided.' });
  //   return;
  // }

  try {
    // const decoded = jwt.verify(token, process.env.JWT_SECRET!);
    // req.user = decoded;
    next();
  } catch (ex) {
    res.status(400).json({ message: 'Invalid token.' });
  }
};

export default authMiddleware;
