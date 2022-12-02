import { prisma } from "../prisma";

interface IUser {
  name: string;
  email: string;
}

export class CreateUserUseCase {
  async execute({ name, email }: IUser) {
    let user = await prisma.user.findFirst({
      where: { email }
    });

    if (user) {
      throw new Error('User already exists');
    };

    user = await prisma.user.create({
      data: {
        name,
        email,
      }
    });

    return user;
  }
}

