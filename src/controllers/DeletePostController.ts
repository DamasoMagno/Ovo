import { Request, Response } from "express";

import { DeletePostCase } from "../useCases/DeletePostUseCase";
const deletePostCase = new DeletePostCase();

export class DeletePostController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;

    await deletePostCase.execute({ post_id: id });

    return response
      .status(200)
      .json({});
  }
}