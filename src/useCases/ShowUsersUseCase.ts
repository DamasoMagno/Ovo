import { prisma } from "../prisma";

export class ShowUsersUseCase {
  async execute() {
    let users = await prisma.user.findMany({
      include: {
        posts: true
      }
    });

    return users;
  }
}

