import CreatePostBtn from "@/components/customComponents/CreatePostBtn";
import { prisma } from "../../../lib/prisma";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import BlogPosts from "@/components/customComponents/BlogPosts";

const postsPage = async () => {
  const posts = await prisma.blogPost.findMany({
    include: {
      author: {
        select: {
          username: true, // Only select the name of the author
        },
      },
    },
  });
  console.log(posts);
  return <BlogPosts posts={posts} />;
};

export default postsPage;
