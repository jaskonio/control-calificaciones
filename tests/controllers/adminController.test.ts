import { Request, Response } from 'express';
import { UserController } from '../../src/controllers/userController';
import { User } from '../../src/models/User';

describe('UserController', () => {
  let userController: UserController;
  let mockRequest: Partial<Request>;
  let mockResponse: Partial<Response>;

  beforeEach(() => {
    userController = new UserController();
    mockRequest = {};
    mockResponse = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    } as Partial<Response>;
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('createUser', () => {
    it('should create a new user', async () => {
      const mockUser = {
        id: 1,
        username: 'testuser',
        password: 'password',
        role: 'user',
      };

      jest.spyOn(User, 'create').mockResolvedValue(mockUser as any);

      mockRequest.body = {
        username: 'testuser',
        password: 'password',
        role: 'user',
      };

      await userController.createEntity(mockRequest as Request, mockResponse as Response);

      expect(mockResponse.status).toHaveBeenCalledWith(201);
      expect(mockResponse.json).toHaveBeenCalledWith(mockUser);
      expect(mockUser.username).toMatch(mockRequest.body.username);
      expect(mockUser.password).toMatch(mockRequest.body.password);
      expect(mockUser.role).toMatch(mockRequest.body.role);

    });

    it('should handle error when creating user fails', async () => {
      const errorMessage = 'Database connection failed';
      jest.spyOn(User, 'create').mockRejectedValue(new Error(errorMessage));

      mockRequest.body = {
        username: 'testuser',
        password: 'password',
        role: 'user',
      };

      await userController.createEntity(mockRequest as Request, mockResponse as Response);

      expect(mockResponse.status).toHaveBeenCalledWith(500);
      expect(mockResponse.json).toHaveBeenCalledWith({ error: errorMessage });
    });
  });

  describe('getUser', () => {
    it('should get a user by ID', async () => {
      const mockUser = {
        id: 1,
        username: 'testuser',
        password: 'password',
        role: 'user',
      };

      jest.spyOn(User, 'findByPk').mockResolvedValue(mockUser as any);

      mockRequest.params = { id: '1' };

      await userController.getEntityById(mockRequest as Request, mockResponse as Response);

      expect(mockResponse.status).toHaveBeenCalledWith(200);
      expect(mockResponse.json).toHaveBeenCalledWith(mockUser);
    });

    it('should handle user not found', async () => {
      jest.spyOn(User, 'findByPk').mockResolvedValue(null);

      mockRequest.params = { id: '999' };

      await userController.getEntityById(mockRequest as Request, mockResponse as Response);

      expect(mockResponse.status).toHaveBeenCalledWith(404);
      expect(mockResponse.json).toHaveBeenCalledWith({ error: 'Entity not found' });
    });

    it('should handle error when getting user fails', async () => {
      const errorMessage = 'Database connection failed';
      jest.spyOn(User, 'findByPk').mockRejectedValue(new Error(errorMessage));

      mockRequest.params = { id: '1' };

      await userController.getEntityById(mockRequest as Request, mockResponse as Response);

      expect(mockResponse.status).toHaveBeenCalledWith(500);
      expect(mockResponse.json).toHaveBeenCalledWith({ error: errorMessage });
    });
  });
});
