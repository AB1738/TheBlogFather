"use client";
import { useActionState, useEffect } from "react";
import { Input } from "../ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "../ui/label";
import { Button } from "../ui/button";
import {  updateBlogPost } from "@/app/actions/actions";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import BackButton from "./BackButton";
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
    post: Post
  }




const EditPostForm = ({post}:PostProps) => {
    const postId=post.id
    const UpdatePost = updateBlogPost.bind(null,postId)
    
  const [state, formAction, isPending] = useActionState(
    UpdatePost,
    undefined
  );
  
  console.log(post)

  const router = useRouter();
  console.log(state)
  useEffect(() => {
    if (state && state.message === "not ok") {
      toast.error("Internal Server Error");
    } else if (state && state.message === "ok") {
      toast.success("Blog Post Successfully Edited! 🎉");
      router.push("/dashboard/blogs");
    }
  }, [state, router]);

  return (<>
    <BackButton/>

    <div className="flex flex-col items-center w-full pt-4">
      <h1 className="text-2xl font-bold">Edit Blog Post</h1>
      <form
        action={formAction}
        className="flex flex-col items-center w-full gap-5 mt-10"
      >
        <div className="flex flex-col gap-2 items-center w-full">
          <Label htmlFor="title" className="text-center">
            Title
          </Label>
          <Input
          defaultValue={post.title}
            type="text"
            name="title"
            id="title"
            className={`border-2 ${
              state?.errors?.title ? "border-red-600" : "border-gray-300"
            }  ${
              state?.errors?.title ? "dark:border-red-600" : "dark:border-input"
            } `}
          />
          {state?.errors?.title && (
            <p className="text-sm text-red-600 text-center">
              {state.errors.title}
            </p>
          )}
        </div>
        <div className="flex flex-col gap-2 items-center w-full">
          <Label htmlFor="description" className="text-center">
            Description
          </Label>
          <Input
                    defaultValue={post.description}

            type="text"
            name="description"
            id="description"
            className={`border-2 ${
              state?.errors?.description ? "border-red-600" : "border-gray-300"
            }  ${
              state?.errors?.description
                ? "dark:border-red-600"
                : "dark:border-input"
            } `}
          />
          {state?.errors?.description && (
            <p className="text-sm text-red-600 text-center">
              {state.errors.description}
            </p>
          )}
        </div>
        <div className="flex flex-col gap-2 items-center  w-full">
          <Label htmlFor="blogPostText" className="text-center">
            Blog Text
          </Label>
          <Textarea
          defaultValue={post.blogPostText}
            name="blogPostText"
            id="blogPostText"
            className={`border-2 ${
              state?.errors?.blogPostText ? "border-red-600" : "border-gray-300"
            }  ${
              state?.errors?.blogPostText
                ? "dark:border-red-600"
                : "dark:border-input"
            } h-[300px]`}
          />
          {state?.errors?.blogPostText && (
            <p className="text-sm text-red-600 text-center">
              {state.errors.blogPostText}
            </p>
          )}
        </div>
        <Button
          className="w-[98%] cursor-pointer hover:w-full"
          disabled={isPending}
        >
          {!isPending ? "Edit Blog Post" : "Editing Post..."}
        </Button>
      </form>
    </div>
    </>
  );
};

export default EditPostForm;
