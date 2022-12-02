import { Request, Response } from "express";

import { ShowPostUseCase } from "../useCases/ShowPostUseCase";
const showPostCase = new ShowPostUseCase();

export class ShowPostController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;

    const users = await showPostCase.execute({ id });

    return response
      .status(201)
      .json({ users });
  }
}

