import { Request, Response } from "express";
import { z as zod } from "zod";

import { CreatePostUseCase } from "../useCases/CreatePostUseCase";
const createPostCase = new CreatePostUseCase();

export class CreatePostController {
  async handle(request: Request, response: Response) {
    const postBody = zod.object({
      name: zod.string(),
      description: zod.string(),
      user_id: zod.string(),
      parent_id: zod.string().optional()
    });

    const {
      name,
      description,
      user_id,
      parent_id
    } = postBody.parse(request.body);

    const post = await createPostCase.execute({
      name,
      description,
      user_id,
      parent_id
    });

    return response
      .status(201)
      .json({ post });
  }
}

