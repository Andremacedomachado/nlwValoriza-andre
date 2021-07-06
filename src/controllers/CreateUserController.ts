import { Request, Response } from "express";
import { CreateUserServices } from "../services/CreateUserServices";

class CreateUserController {
  async handle(request: Request, response: Response) {
    const { name, email, admin, password } = request.body;

    const createUserServices = new CreateUserServices();

    const user = await createUserServices.execute({ name, email, admin, password });

    return response.json(user);

  }
}

export { CreateUserController };