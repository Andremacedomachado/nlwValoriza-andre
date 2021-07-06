import { Request, Response, NextFunction } from "express";
import { UsersRepositories } from "../repositories/UsersRepositories";
import { getCustomRepository } from "typeorm";


export async function ensureAdmin(request: Request, response: Response, nextFunction: NextFunction) {
  const { user_id } = request;
  const userRepositories = getCustomRepository(UsersRepositories);

  const { admin } = await userRepositories.findOne(user_id);
  if (admin) {
    return nextFunction();
  }

  return response.status(401).json({
    error: "Unauthorized"
  })
}