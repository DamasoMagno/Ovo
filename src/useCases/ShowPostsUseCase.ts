import { prisma } from "../prisma";

export class ShowPostsUseCase {
  async execute() {
    const posts = await prisma.post.findMany({
      where: {
        parent_id: null,
      },
      include: {
        _count: {
          select: {
            comments: true,
            usersLikedPost: true
          }
        },
      }
    });

    return posts;
  }
}

