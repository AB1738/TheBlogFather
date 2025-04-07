"use server";
/* eslint-disable  @typescript-eslint/no-explicit-any */

import { prisma } from "../../../lib/prisma";
import { Prisma } from "@prisma/client";
import { loginSchema, userSchema,blogPostSchema } from "../../../utils/schemas";
// import { ZodError } from "zod";
import jwt from "jsonwebtoken";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import bcrypt from "bcryptjs";
import { revalidatePath } from "next/cache";

export const signupAction = async (prevState: any, formData: FormData) => {
  try {
    console.log(prevState);
    const email = formData.get("email") as string;
    const username = formData.get("username") as string;
    const password = formData.get("password") as string;
    const confirmPassword = formData.get("confirmPassword") as string;
    const email_regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const isValidEmail = email_regex.test(email);

    if (!email || !password || !confirmPassword || !username) {
      return {
        errors: {
          username: ["All fields are required"],
          email: ["All fields are required"],
          password: ["All fields are required"],
        },
      };
    }
    const parsedUser = userSchema.safeParse({
      email,
      username,
      password,
    });
    if (!parsedUser.success) {
      return {
        errors: parsedUser.error.flatten().fieldErrors,
      };
    }

    if (!isValidEmail) {
      return {
        errors: {
          email: ["Invalid Email"],
        },
      };
    }
    console.log(password, confirmPassword);

    if (password !== confirmPassword) {
      return {
        errors: {
          password: ["Passwords must match"],
        },
      };
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await prisma.user.create({
      data: {
        email,
        username,
        hashedPassword,
      },
    });
    console.log(user);
    return {
      message: "ok",
    };
  } catch (e: unknown) {
    if (e instanceof Prisma.PrismaClientKnownRequestError) {
      if (e.code === "P2002") {
        //checking if username or email entries arent already in the db
        if (e.meta?.target && Array.isArray(e.meta?.target)) {
          //formatting properly in order to display in client
          const errorMessages = e.meta.target.reduce((acc, err) => {
            acc[err] = `This ${err} has already been taken`;
            return acc;
          }, {});
          return { errors: errorMessages };
        }
      }
    }
  }
};

export const loginAction = async (prevState: any, formData: FormData) => {
  try {
    console.log(prevState);

    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    if (!email || !password) {
      return {
        errors: {
          email: ["All fields are required"],
          password: ["All fields are required"],
        },
      };
    }

    const validatedSchema = loginSchema.safeParse({
      email,
      password,
    });

    if (!validatedSchema.success) {
      return {
        errors: validatedSchema.error.flatten().fieldErrors,
      };
    }

    const user = await prisma.user.findUnique({
      where: {
        email: email,
      },
    });
    if (!user) {
      return {
        message: "Incorrect Credentials",
      };
    }
    const isCorrectPassword = await bcrypt.compare(
      password,
      user.hashedPassword
    );
    if (!isCorrectPassword) {
      return {
        message: "Incorrect Credentials",
      };
    }
    //create jwt and send it in a cookie
    const authToken = jwt.sign({ id: user.id }, process.env.SECRET!);
    const cookie = await cookies();
    cookie.set({
      name: "authToken",
      value: authToken,
      httpOnly: true,
      secure: true,
      expires: new Date(Date.now() + 7 * 24 * 3600 * 1000),
    });
    console.log(authToken);
    console.log(user);
    return {
      message: "Logged In",
    };
  } catch (e: unknown) {
    if (e instanceof Error) {
      console.log(e.message);
    }
  }
};

export const logoutAction = async () => {
  const cookie = await cookies();
console.log('pathname above')
  const authToken = cookie.get("authToken");
  if (authToken) {
    cookie.delete("authToken");
   

    return{
        message:'Bye. Come Back Soon! 🎉'

    }

  }
};

export const createBlogPost = async (prevState: any, formData: FormData) => {
  try {
    //check to see if authenticated
    const user=await fetchUserSession()
    if(!user)return
    const title=formData.get('title') as string
    const description=formData.get('description') as string
    const blogPostText=formData.get('blogPostText') as string
    if (!title || !description||!blogPostText) {
        return {
          errors: {
            title: ["All fields are required"],
            description: ["All fields are required"],
            blogPostText: ["All fields are required"],
          },
        };
      }
      const blogPost=blogPostSchema.safeParse({
        title,
        description,
        blogPostText,
        author:user,
        authorId:user.id
      })
      if(!blogPost.success){
       return{
       errors:blogPost.error.flatten().fieldErrors
       }
      }
    console.log(blogPost.data)
    const newPost=await prisma.blogPost.create({
        data:{
            title,
            description,
            blogPostText,
            authorId:user.id
        }
    })
    console.log(newPost)
    revalidatePath('/posts')
    revalidatePath('/dashboard/blogs')
    return{
        message: "ok"
    }


  } catch (e: unknown) {
    if (e instanceof Error) {
      console.log(e);
      return{
        message: "not ok"
    }
    }
  }
};
export const fetchUserSession=async()=>{
    try{
        const cookie = await cookies();
        const authToken = cookie.get("authToken")?.value;
        if (!authToken) return;
        const userPayload = jwt.verify(authToken, process.env.SECRET!) as tokenPayload
        const user=await prisma.user.findUnique({
            where:{
                id:userPayload.id
            },
            omit: {
                hashedPassword: true
            }
              
        })
        if(!user)return
    
        return user
    }catch(e){
        if(e instanceof Error){
            console.log(e)
        }
    }

}
export const updateBlogPost = async (postId:string,prevState: any, formData: FormData,) => {
  //check to see if authenticated
  try{

    const user=await fetchUserSession()
    if(!user)return

    const title=formData.get('title') as string
    const description=formData.get('description') as string
    const blogPostText=formData.get('blogPostText') as string

    if (!title || !description||!blogPostText) {
        return {
          errors: {
            title: ["All fields are required"],
            description: ["All fields are required"],
            blogPostText: ["All fields are required"],
          },
        };
      }
      const blogPost=blogPostSchema.safeParse({
        title,
        description,
        blogPostText,
        author:user,
        authorId:user.id
      })
      if(!blogPost.success){
       return{
       errors:blogPost.error.flatten().fieldErrors
       }
      }
    console.log(blogPost.data)
    const newPost=await prisma.blogPost.update({
        where:{
        id:postId
        },
        data:{
            title,
            description,
            blogPostText,
            authorId:user.id
        }
    })
    console.log(newPost)
    revalidatePath('/posts')
    revalidatePath('/dashboard/blogs')
    return{
        message: "ok"
    }



  }catch(e:unknown){
    if(e instanceof Error){
        console.log(e)
        return{
            message: "not ok"
        }
    }
  }
};
export const deleteBlogPost = async (id:string) => {
  //check to see if authenticated
  try{
    const user=await fetchUserSession()
    if(!user)return
    const post = await prisma.blogPost.delete({
        where:{
            id,
            authorId:user.id
        },
      });
      console.log(post)
      revalidatePath('/dashboard/blogs')
      revalidatePath('/posts')
      return{
        message:'ok'
      }

  }catch(e:unknown){
    if(e instanceof Error){
        console.log(e)
        return{
            message:'Unable To Delete Post. Try Again Later.'
        }
    }
  }
};

interface tokenPayload{
    id:string,
    iat:number
}