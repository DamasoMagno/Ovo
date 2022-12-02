import { prisma } from "../prisma";

interface IPost {
  name: string;
  description: string;
  user_id: string;
  parent_id?: string;
}

export class CreatePostUseCase {
  async execute({ name, description, user_id, parent_id }: IPost) {
    const post = await prisma.post.create({
      data: {
        name,
        description,
        user_id,
        parent_id
      },
    });

    return post;
  }
}