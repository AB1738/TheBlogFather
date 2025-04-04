"use client";
import { useActionState, useEffect } from "react";
import { Input } from "../ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "../ui/label";
import { Button } from "../ui/button";
import { createBlogPost } from "@/app/actions/actions";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import BackButton from "./BackButton";

const CreatePostForm = () => {
  const [state, formAction, isPending] = useActionState(
    createBlogPost,
    undefined
  );

  const router = useRouter();
  console.log(state)
  useEffect(() => {
    if (state && state.message === "not ok") {
      toast.error("Internal Server Error");
    } else if (state && state.message === "ok") {
      toast.success("Blog Post Created! 🎉");
      router.push("/posts");
    }
  }, [state, router]);

  return (<>
    <BackButton/>

    <div className="flex flex-col items-center w-full pt-4">
      <h1 className="text-2xl font-bold">Create New Blog Post</h1>
      <form
        action={formAction}
        className="flex flex-col items-center w-full gap-5 mt-10"
      >
        <div className="flex flex-col gap-2 items-center w-full">
          <Label htmlFor="title" className="text-center">
            Title
          </Label>
          <Input
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
          {!isPending ? "Create New Post" : "Creating Post..."}
        </Button>
      </form>
    </div>
    </>
  );
};

export default CreatePostForm;
