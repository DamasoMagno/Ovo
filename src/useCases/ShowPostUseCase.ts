import { prisma } from "../prisma";

interface IShowPost {
  id: string;
}

export class ShowPostUseCase {
  async execute({ id }: IShowPost) {
    const post = await prisma.post.findFirst({
      where: {
        id
      },
      include: {
        comments: true,
        parent: true,
        usersLikedPost: true
      }
    });

    return post;
  }
}

