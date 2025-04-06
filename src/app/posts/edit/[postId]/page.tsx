import { prisma } from "../../../../../lib/prisma";
import { redirect } from "next/navigation";
import BackButton from "@/components/customComponents/BackButton";
import { UserRoundPen, CalendarClock } from "lucide-react";

interface postIdPropType {
  params: {
    postId: string;
  };
}
const page = async ({ params }: postIdPropType) => {
  const { postId } = params;
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
    <div className="pt-5">
      <BackButton />
      <div className="flex justify-between items-center my-3">
        <h1 className="text-3xl font-bold">
          {post?.title.charAt(0).toUpperCase() + post.title.slice(1)}
        </h1>
        <p className="text-sm flex gap-0.5">
          {post.author.username.charAt(0).toUpperCase() +
            post.author.username.slice(1)}
          <UserRoundPen size={16} />
        </p>
      </div>
      <h2 className="my-2">{post.description}</h2>

      <h3>
        {post.blogPostText.charAt(0).toUpperCase() + post.blogPostText.slice(1)}
      </h3>
      <p className="flex justify-end items-center text-xs  gap-0.5 mt-2.5">
        {post.updatedAt.toLocaleString()}
        <CalendarClock size={16} />
      </p>
    </div>
  );
};

export default page;
