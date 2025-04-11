import { prisma } from "../../../../../lib/prisma";
import { redirect } from "next/navigation";

import EditPostForm from "@/components/customComponents/EditPostForm";


const page = async ({ params }:  { params: Promise<{ postId: string; }> }) => {
  const { postId } = await params;
  const post = await prisma.blogPost.findUnique({
    where: {
      id: postId,
    },
    include: {
      author: {
        select: {
          username: true,
        },
      },
    },
  });
  if (!post) {
    redirect("/posts");
  }
  console.log(post);
  return (

      <EditPostForm post={post} />

  );
};

export default page;
