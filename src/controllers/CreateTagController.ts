import { Request, Response } from "express";
import { CreateTagSevices } from "../services/CreateTagServices";

class CreateTagController {
  async handle(request: Request, response: Response) {
    const { name } = request.body;
    const createTagService = new CreateTagSevices();

    const tag = await createTagService.execute({ name });

    return response.json(tag);
  }

}

export { CreateTagController };