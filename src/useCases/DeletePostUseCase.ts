import { prisma } from "../prisma";

interface IDeletePost {
  post_id: string;
}

export class DeletePostCase {
  async execute({ post_id }: IDeletePost) {
    await prisma.post.delete({
      where: {
        id: post_id
      }
    })
  }
}