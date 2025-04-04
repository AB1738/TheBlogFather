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
  return (
    <div className="pt-5">
        <div className="flex w-full justify-end">
        <CreatePostBtn />

        </div>
      <div className="flex flex-col gap-2 mt-5">
      {posts.map((post) => (
        <Link href={`/posts/${post.id}`} key={post.id} className="shadow-md hover:scale-101">
          <Card>
            <CardHeader>
              <CardTitle>
                {post.title.charAt(0).toUpperCase() + post.title.slice(1)}
              </CardTitle>
              <CardDescription>
                {post.description.charAt(0).toUpperCase() +
                  post.description.slice(1)}
              </CardDescription>
            </CardHeader>
            <CardFooter className="border-t-2 border-zinc-300 dark:border-zinc-800 flex justify-between w-full pt-3">
              <p className="text-xs text-gray-500 dark:text-gray-300"> {post.author.username.charAt(0).toUpperCase()+post.author.username.slice(1)}</p>
              <p className="text-xs text-gray-500 dark:text-gray-300">
                {post.updatedAt.toLocaleString()}
              </p>
            </CardFooter>
          </Card>
        </Link>
      ))}
      </div>
    </div>
  );
};

export default postsPage;
