import { Request, Response } from "express";

import { LikePostUseCase } from "../useCases/LikePostUseCase";
const likePostCase = new LikePostUseCase();

export class LikePostController {
  async handle(request: Request, response: Response) {
    const { id: post_id } = request.params;
    let { user_id } = request.headers;

    user_id = user_id as string;

    await likePostCase.execute({ user_id, post_id });

    return response
      .status(201)
      .json();
  }
}

