import { Request, Response } from "express";
import { z as zod } from "zod";

import { CreateUserUseCase } from "../useCases/CreateUserUseCases";
const createUserCase = new CreateUserUseCase();

export class CreateUserController {
  async handle(request: Request, response: Response) {
    const userBody = zod.object({
      name: zod.string(),
      email: zod.string(),
    });

    const { name, email } = userBody.parse(request.body);

    const userCreated = await createUserCase.execute({
      name,
      email,
    });

    return response
      .status(201)
      .json({ userCreated });
  }
}

