import { Request, Response } from "express";

import { ShowPostsUseCase } from "../useCases/ShowPostsUseCase";
const showPostsCase = new ShowPostsUseCase();

export class ShowPostsController {
  async handle(request: Request, response: Response) {
    const posts = await showPostsCase.execute();

    return response
      .status(201)
      .json({ posts });
  }
}

