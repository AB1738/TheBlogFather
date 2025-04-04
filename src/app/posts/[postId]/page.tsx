import { Button } from "@/components/ui/button";
import { prisma } from "../../../../lib/prisma";
import { redirect } from 'next/navigation'
import BackButton from "@/components/customComponents/BackButton";

interface postIdPropType {
  params: {
    postId: string;
  };
}
const page = async ({ params }: postIdPropType) => {
  const { postId } = params
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
  if(!post){
    redirect('/posts')
  }
  console.log(post);
  return <div>
    <BackButton/>
    <h1>{post?.title}</h1>
    <h2>{post.description}</h2>
    <h3>{post.blogPostText}</h3>
    <p>{post.author.username.charAt(0).toUpperCase()+post.author.username.slice(1)}</p>
    <p>{post.updatedAt.toLocaleString()}</p>
  </div>;
};

export default page;
