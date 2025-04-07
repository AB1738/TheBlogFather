import Link from "next/link";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import CreatePostBtn from "./CreatePostBtn";
import { Trash, SquarePen } from "lucide-react";
import { deleteBlogPost } from "@/app/actions/actions";
import BlogButtons from "./BlogButtons";

type Author = {
  username: string;
};

type Post = {
  author: Author;
  id: string;
  title: string;
  description: string;
  updatedAt: Date;
  blogPostText: string;
  authorId: string;
  createdAt: Date;
};
interface PostProps {
  posts: Post[];
  dashboard: boolean;
}
const BlogPosts = ({ posts, dashboard }: PostProps) => {
  return (
    <div className="pt-5">
      <div className="flex w-full justify-end">
        <CreatePostBtn />
      </div>
      <div className="flex flex-col gap-2 mt-5">
        {posts.map((post) => (
          <Link
            href={`/posts/${post.id}`}
            key={post.id}
            className="shadow-md hover:scale-101 transition-all"
          >
            <Card>
              <CardHeader>
                <CardTitle className="flex justify-between items-center relative">
                  {!dashboard ? (
                    <h1 className="w-full">
                      {post.title.charAt(0).toUpperCase() + post.title.slice(1)}
                    </h1>
                  ) : (
                    <>
                      <h1 className="w-[75%] text-center sm:text-left leading-6">
                        {post.title.charAt(0).toUpperCase() +
                          post.title.slice(1)}
                      </h1>
                      <div className="self-start">
                      <BlogButtons id={post.id} />
                      </div>
                    </>
                  )}
                </CardTitle>
                <CardDescription>
                  {post.description.charAt(0).toUpperCase() +
                    post.description.slice(1)}
                </CardDescription>
              </CardHeader>
              <CardFooter className="border-t-2 border-zinc-300 dark:border-zinc-800 flex justify-between w-full pt-3">
                <p className="text-xs text-gray-500 dark:text-gray-300">
                  {" "}
                  {post.author.username.charAt(0).toUpperCase() +
                    post.author.username.slice(1)}
                </p>
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

export default BlogPosts;
