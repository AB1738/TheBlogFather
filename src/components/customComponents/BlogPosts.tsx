import Link from "next/link";
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card";
import CreatePostBtn from "./CreatePostBtn";

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
  }
const BlogPosts = ({posts}:PostProps) => {
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
  )
}

export default BlogPosts