import { prisma } from "../../../../../lib/prisma";
import { redirect } from "next/navigation";
import BackButton from "@/components/customComponents/BackButton";
import { UserRoundPen, CalendarClock } from "lucide-react";
import EditPostForm from "@/components/customComponents/EditPostForm";

interface postIdPropType {
  params: {
    postId: string;
  };
}
const page = async ({ params }: postIdPropType) => {
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
