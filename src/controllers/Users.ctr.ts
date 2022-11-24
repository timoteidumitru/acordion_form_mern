import { NextFunction, Request, Response } from 'express';
import User from '../models/Users.model';

const createUser = (req: Request, res: Response) => {
  const { firstName, surName, email, telephone, gender, dob, comments } = req.body;

  const user = new User({
    firstName,
    surName,
    email,
    telephone,
    gender,
    dob,
    comments
  });

  return user
    .save()
    .then((user: any) => res.status(201).json(user))
    .catch((error: any) => res.status(500).json({ error }));
};

const getAllUsers = (req: Request, res: Response, next: NextFunction) => {
  return User.find()
    .then((users: any) => res.status(200).json(users))
    .catch((error: any) => res.status(500).json(error));
};

export default { createUser, getAllUsers };
