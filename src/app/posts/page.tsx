import { prisma } from "../../../lib/prisma";

import BlogPosts from "@/components/customComponents/BlogPosts";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Blog Posts',
  };

const postsPage = async () => {
  const posts = await prisma.blogPost.findMany({
    include: {
      author: {
        select: {
          username: true,
        },
      },
    },
    orderBy: {
        createdAt: 'desc', 
      },
  });
  console.log(posts);
  return <BlogPosts posts={posts} dashboard={false}/>;
};

export default postsPage;
