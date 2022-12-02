import { Request, Response } from "express";

import { ShowUsersUseCase } from "../useCases/ShowUsersUseCase";
const showUsersCase = new ShowUsersUseCase();

export class ShowUsersController {
  async handle(request: Request, response: Response) {
    const users = await showUsersCase.execute();
    
    return response
      .status(201)
      .json({ users });
  }
}

