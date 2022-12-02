import { prisma } from "../prisma";

interface ILikePost {
  user_id: string;
  post_id: string;
}

export class LikePostUseCase {
  async execute({ user_id, post_id }: ILikePost) {
    let post = await prisma.post.findFirst({
      where: { id: post_id }
    });

    if (!post) {
      throw new Error("This post don't exists");
    }

    console.log(user_id)

    const userAleadyLikedPost = await prisma.userLikedPost.findFirst({
      where: {
        user_id: user_id,
        post_id: post.id
      }
    });

    if (userAleadyLikedPost) {
      throw new Error('User already this post');
    }

    await prisma.userLikedPost.create({
      data: {
        user_id: user_id,
        post_id: post.id,
      },
    });
  }
}